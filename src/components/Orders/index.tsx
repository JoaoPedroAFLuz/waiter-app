import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const order: Order[] = [
  {
    _id: '6372ed6ec7d4baf519bf74ee',
    table: '1',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza quatro queijos',
          imagePath: '1668476096782-quatro-queijos.png',
          price: 55,
        },
        quantity: 1,
        _id: '6372ed6ec7d4baf519bf74ef',
      },
      {
        product: {
          name: 'Coca cola',
          imagePath: '1668476032094-coca-cola.png',
          price: 7.5,
        },
        quantity: 2,
        _id: '6372ed6ec7d4baf519bf74f0',
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕒" title="Fila de espera" orders={order} />
      <OrdersBoard icon="👩🏽‍🍳" title="Em preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Finalizado!" orders={[]} />
    </Container>
  );
}
