(()=>{
  let n1: null;
  let n2: undefined;

  function hi(name: string | null){
    let hola: string = 'Hola _';
    hola += name?.toLocaleLowerCase() || 'nobody'
  }
})();
