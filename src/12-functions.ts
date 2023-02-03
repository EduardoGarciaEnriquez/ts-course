(() => {
  type Sizes = 'XXL' | 'XL' | 'L' | 'M' | 'S';

  const crateProductToJson = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title, createdAt, stock, size
    }
  }
})();
