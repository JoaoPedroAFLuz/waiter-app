import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function getProductById(req: Request, res: Response) {
  try {
    const { productId } = req.params;

    const product = await Product.findById(productId);

    res.json(product);
  } catch (error) {
    res.status(500).json({ error });
  }
}
