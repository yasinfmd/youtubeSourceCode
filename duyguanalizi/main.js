
const net =new brain.NeuralNetwork();

const df=[
  { input: { happy: 1, love: 1, excited: 1, fun: 1 }, output: { positive: 1 } },
  { input: { grateful: 1, cheerful: 1 }, output: { positive: 1 } },
  { input: { relaxed: 1, joyful: 1 }, output: { positive: 1 } },
  { input: { hate: 1, sad: 1, angry: 1, mad: 1 }, output: { negative: 1 } },
  { input: { frustrated: 1, disappointed: 1 }, output: { negative: 1 } },
  { input: { lonely: 1, depressed: 1 }, output: { negative: 1 } },
  { input: { okay: 1, normal: 1 }, output: { neutral: 1 } },
  { input: { indifferent: 1, average: 1 }, output: { neutral: 1 } },
  { input: { fine: 1, passable: 1 }, output: { neutral: 1 } }
]

net.train(df)

const output=net.run({love:1,happy:1,hate:1})

console.log(output)


const testData = [
  { input: { happy: 1, love: 1 }, expected: { positive: 1 } },
  { input: { hate: 1, sad: 1 }, expected: { negative: 1 } },
  { input: { normal: 1, okay: 1 }, expected: { neutral: 1 } },
  { input: { excited: 1, fun: 1 }, expected: { positive: 1 } },
  { input: { angry: 1, frustrated: 1 }, expected: { negative: 1 } },
  { input: { indifferent: 1, average: 1 }, expected: { neutral: 1 } }
];
testData.forEach((item)=>{
  const output=net.run(item.input)
  console.log('output',output)
})