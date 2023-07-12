const assert = require('assert')
const { When, Then , Given } = require('@cucumber/cucumber')
const { Greeter } = require('../../app')

When('Selamlayıcı selam verir', function () {
  this.whatIHeard = new Greeter().sayHello()
});

Then('merhaba duymalıyım {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse)
});



function isItFriday(today) {
  // We'll leave the implementation blank for now
 //return 'Nope'
  if (today === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('today is Sunday', function () {
  this.today = 'Sunday';
});

Given('today is Friday', function () {
  this.today = 'Friday';
});

When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});



Given('bir sayısı verilir', function () {
  this.number = "bir";
});

When('sayı kac diye sorulur', function () {
  this.number = "bir"
});

Then('sayının {string} oldugu belirlenir',function(expectedAnswer){
  assert.equal(this.number, expectedAnswer);
})

