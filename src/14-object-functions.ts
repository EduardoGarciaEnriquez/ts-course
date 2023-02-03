(() => {
  type Sizes = 'L' | 'M' | 'S';
  let products: any[] = [];

  const addProduct = (data: { name: string, createdAt: Date, stock: number, size?: Sizes }) => {
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
})();
