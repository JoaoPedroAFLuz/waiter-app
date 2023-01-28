import { useEffect, useState } from 'react';
import { Order } from '../../types/Order';
import { api } from '../../utils/api';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

export function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);

  const waitingOrders = orders.filter((order) => order.status === 'WAITING');
  const inProductionOrders = orders.filter(
    (order) => order.status === 'IN_PRODUCTION'
  );
  const doneOrders = orders.filter((order) => order.status === 'DONE');

  function handleChangeOrderStatus(orderId: string, status: Order['status']) {
    setOrders((prevState) =>
      prevState.map((order) =>
        order._id === orderId ? { ...order, status } : order
      )
    );
  }

  function handleCancelOrders(orderId: string) {
    setOrders((prevState) =>
      prevState.filter((order) => order._id !== orderId)
    );
  }

  useEffect(() => {
    api.get('/orders').then(({ data }) => setOrders(data));
  }, []);

  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={waitingOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrders}
      />
      <OrdersBoard
        icon="👩🏽‍🍳"
        title="Em preparação"
        orders={inProductionOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrders}
      />
      <OrdersBoard
        icon="✅"
        title="Finalizado!"
        orders={doneOrders}
        onChangeOrderStatus={handleChangeOrderStatus}
        onCancelOrder={handleCancelOrders}
      />
    </Container>
  );
}
