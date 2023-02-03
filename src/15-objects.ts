(() => {
  type Sizes = 'L' | 'M' | 'S';
  type Product = { name: string, createdAt: Date, stock: number, size?: Sizes };
  let products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  for (let i = 0; i < 5; i++) {
    addProduct({
      name: `product${i}`,
      createdAt: new Date(),
      stock: 123 - i,
      size: 'M'
    })
  }

  console.log(products)
})()
