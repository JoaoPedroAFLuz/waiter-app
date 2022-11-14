import { Router } from 'express';

export const router = Router();

router.get('/products', (req, res) => {
  res.send('ok');
});

router.get('/products/:productId', (req, res) => {
  res.send('ok');
});

router.post('/products');

router.get('/categories');

router.get('/categories/:categoryId/products');

router.post('/categories');

router.get('/orders');

router.post('/orders');

router.patch('/oders/:id');

router.delete('/oders/:id');
