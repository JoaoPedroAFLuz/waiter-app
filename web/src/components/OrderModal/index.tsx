import { Actions, ModalBody, OrderDetails, Overlay } from './styles';

import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import { useEffect } from 'react';

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  isLoading: boolean;
  onClose: () => void;
  onCancelOrder: () => Promise<void>;
}

export function OrderModal({
  visible,
  order,
  isLoading,
  onClose,
  onCancelOrder,
}: OrderModalProps) {
  useEffect(() => {
    function handleKeydown(event: KeyboardEvent) {
      console.log(event.key);

      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }

  return (
    <Overlay>
      ö
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Close icon" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>

          <div>
            <span>
              {order.status === 'WAITING' && '🕒'}
              {order.status === 'IN_PRODUCTION' && '👩🏽‍🍳'}
              {order.status === 'DONE' && '✅'}
            </span>
            <strong>
              {order.status === 'WAITING' && 'Fila de espera'}
              {order.status === 'IN_PRODUCTION' && 'Em preparação'}
              {order.status === 'DONE' && 'Finalizado!'}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <div className="img">
                  <img
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    alt={product.name}
                  />
                </div>
                <span className="quantity">{quantity}x</span>

                <div className="product-details">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>
              {formatCurrency(
                order.products.reduce(
                  (acc, { product, quantity }) =>
                    (acc += product.price * quantity),
                  0
                )
              )}
            </strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="primary" disabled={isLoading}>
            <span>👩🏽‍🍳 Iniciar Produção</span>
          </button>

          <button
            type="button"
            className="secondary"
            disabled={isLoading}
            onClick={onCancelOrder}
          >
            <span>Cancelar pedido</span>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
