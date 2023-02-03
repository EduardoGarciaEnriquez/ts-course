(() => {
  type UserID = number | boolean | string;
  let userId: UserID;

  type Size = 'XXL' | 'XL' | 'L' | 'M' | 'S'
  let size: Size;

  function greeting(userId: UserID, size: Size) {
    if (typeof userId === 'string') {
      console.log(userId)
    }
  }

  greeting(123432, 'L')
})();
