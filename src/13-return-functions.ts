(() => {
  const calcTotal = (prices: number[]): number => {
    let total: number = 0;
    prices.forEach(item => {
      total += item
    })
    return total
  }

  const printTotal = (prices: number[]): void => {
    let total: number = 0;
    prices.forEach(item => {
      total += item
    })
    console.log(`El total es: ${total}`)
  }

  printTotal([1,2,3,5,6])
})();
