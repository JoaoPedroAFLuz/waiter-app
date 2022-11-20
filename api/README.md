# 👩🏽‍🍳 Waiter API

## 📱 Waiter App:

Mobile app that allows the waiter to take the customers orders and send directly to the cooks. <br />
The app make it possible to the waiter see the entire restaurant's menu and select the custumers order. <br />
The cooks receive the orders and can change their status.

## 🖥 Waiter API:

The API allows the mobile app and the web site to:

- [x] List products, categories and orders.
- [x] Create products, categories and orders.
- [x] Get products by id.
- [x] Get products image.
- [x] List products by category.
- [x] Update orders status.
- [x] Cancel orders.
- [ ] Find categories and orders by id.
- [ ] Update products and categories.
- [ ] Delete products and categories.

## 🛠 How to install:

- Clone the project `git clone https://github.com/JoaoPedroLuz57/waiter-node-api.git`.
- Install dependecies with `yarn`.

## 🚀 How to run:

- Run `yarn start`.
- Route [`localhost:3001`](http://localhost:3001).

## 🗺 Routes:
### Products:
- List: [`localhost:3001/products`](http://localhost:3001/products) (GET)
- Get by id: [`localhost:3001/products/:productId`](http://localhost:3001/products/:productId) (GET)
- Get image: [`localhost:3001/uploads/:imageFilename`](http://localhost:3001/uploads/:imageFilename) (GET)
- Create: [`localhost:3001/products`](http://localhost:3001/products) (POST)

### Categories:
- List: [`localhost:3001/categories`](http://localhost:3001/categories) (GET)
- List products by category: [`localhost:3001/categories/:categoryId/products`](http://localhost:3001/categories/:categoryId/products) (GET)
- Create: [`localhost:3001/categories`](http://localhost:3001/categories) (POST)

### Orders:
- List: [`localhost:3001/orders`](http://localhost:3001/orders) (GET)
- Create: [`localhost:3001/orders`](http://localhost:3001/orders) (POST)
- Change status: [`localhost:3001/orders/:orderId`](http://localhost:3001/orders/:orderId) (PATCH)
- Cancel: [`localhost:3001/orders/:orderId`](http://localhost:3001/orders/:orderId) (DELETE)
