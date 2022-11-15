import path from 'node:path';
import { Router } from 'express';
import multer, { diskStorage } from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

import { getProductById } from './app/useCases/products/getProductById';
export const router = Router();

const upload = multer({
  storage: diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get('/products', listProducts);

router.get('/products/:productId', getProductById);

router.post('/products', upload.single('image'), createProduct);

router.get('/categories', listCategories);

router.get('/categories/:categoryId/products', listProductsByCategory);

router.post('/categories', createCategory);

router.get('/orders');

router.post('/orders');

router.patch('/oders/:id');

router.delete('/oders/:id');
