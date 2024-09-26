const net = new brain.recurrent.LSTMTimeStep();

const df= [
  [10, 12, 15],
  [20, 22, 25],
  [30, 35, 40]
];

net.train(df)

const testData=[15,12,20]

const predict=[net.run([15]),net.run([15,12])]


console.log('prediction',predict)
console.log('real data',testData)

console.log('diff',[Math.abs(testData[0]-predict[0]),Math.abs(testData[1]-predict[1])])
