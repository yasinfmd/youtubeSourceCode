const sayilariTople=(a,b,c)=>a+b+c
console.log(sayilariTople(2,6,22))
const sayilerCurrying=a=>b=>c=>a+b+c
console.log(sayilerCurrying(20)(23)(45))