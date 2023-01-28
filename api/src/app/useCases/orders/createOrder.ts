import { Request, Response } from 'express';

import { io } from '../../..';
import { Order } from '../../models/Order';

export async function createOrder(req: Request, res: Response) {
  try {
    const { table, products } = req.body;

    if (!table) {
      return res.status(400).json({ error: 'Necessário informar a mesa' });
    }

    if (!products) {
      return res.status(400).json({ error: 'Necessário informar os produtos' });
    }

    const order = await Order.create({
      table,
      products,
    });

    const orderDetails = await order.populate('products.product');

    io.emit('orders@new', orderDetails);

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error });
  }
}
