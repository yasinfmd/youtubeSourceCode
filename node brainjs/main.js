const net = new brain.NeuralNetwork();

const df=[
  {input:{buy:1,now:1,free:1},output:{spam:1}},
  {input:{hello:1,meeting:1},output:{noSpam:1}},
  {input:{win:1,cash:1,spin:1},output:{spam:1}},
  {input:{family:1,dinner:1,calender:1},output:{noSpam:1}},
]


net.train(df)

const output=net.run({buy:1,win:1,family:1,dinner:1})

//document.body.innerHTML=`Veri  spam olma olasılıg :${output.spam} , olmama olasılıgı : ${output.noSpam}`

console.log(output)



const testData = [
  { input: { buy: 1, now: 0, free: 1 }, expected: { spam: 1 } },
  { input: { hello: 1, meeting: 0 }, expected: { noSpam: 1 } },
  { input: { win: 0, cash: 1 }, expected: { spam: 1 } },
  { input: { family: 0, dinner: 1 }, expected: { noSpam: 1 } }
];


testData.forEach((item)=>{
  const output=net.run(item.input)
  const p = document.createElement('p')
  p.innerHTML="Input :" + JSON.stringify(item.input) + "Expected :" + JSON.stringify(item.expected) + "Output : " + JSON.stringify(output)
  document.body.appendChild(p)
})