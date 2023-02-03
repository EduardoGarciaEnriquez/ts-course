import { addProduct, calcStock, products } from "./product.service";

for (let i = 0; i < 5; i++) {
  addProduct({
    name: `product${i}`,
    createdAt: new Date(),
    stock: i,
    size: 'M'
  })
}

console.log('products: ',products)
console.log('total stock: ', calcStock())
