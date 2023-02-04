const composition=(f,g)=>(x)=>f(g(x))

console.log(composition(Math.round,parseFloat)("5.32"))