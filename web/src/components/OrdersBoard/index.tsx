import { useState } from 'react';
import { toast } from 'react-toastify';

import { api } from '../../utils/api';

import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';

import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
  onCancelOrder: (orderId: string) => void;
}

export function OrdersBoard({
  icon,
  title,
  orders,
  onChangeOrderStatus,
  onCancelOrder,
}: OrdersBoardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  async function handleChangeOrderStatus() {
    if (!selectedOrder) return;

    setIsLoading(true);

    const status =
      selectedOrder.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder._id}`, {
      status,
    });

    toast.success(
      `O pedido da mesa ${selectedOrder.table} está ${
        status === 'IN_PRODUCTION' ? 'em produção' : 'finalizado'
      }!`
    );

    onChangeOrderStatus(selectedOrder._id, status);
    setIsModalVisible(false);
    setIsLoading(false);
  }

  async function handleCancelOrder() {
    if (!selectedOrder) return;

    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder._id}`);

    toast.success(`O pedido da mesa ${selectedOrder.table} foi cancelado!`);

    onCancelOrder(selectedOrder._id);
    setIsModalVisible(false);
    setIsLoading(false);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        isLoading={isLoading}
        onClose={handleCloseModal}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrder}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
