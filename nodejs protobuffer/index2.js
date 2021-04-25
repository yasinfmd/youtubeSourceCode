const fs = require('fs')
const Schema = require('./todo_pb')
//defination setters
const todoOne = new Schema.Todo();
todoOne.setId(1);
todoOne.setTitle('Title');
todoOne.setContent('Content');
todoOne.setActive(false);
const todoTwo = new Schema.Todo();
todoTwo.setId(2);
todoTwo.setTitle('Title 2');
todoTwo.setContent('Content 2 ');
todoTwo.setActive(true);
const todoThree = new Schema.Todo();
todoThree.setId(3);
todoThree.setTitle('Title 3');
todoThree.setContent('Content 3');
todoThree.setActive(false);

const bytes = todoOne.serializeBinary()
console.log('bytes', bytes)

//add todo
const todos = new Schema.Todos();

todos.setTodosList([todoOne, todoTwo, todoThree])
//todos.addTodos(todoOne)
//todos.addTodos(todoTwo)
//todos.addTodos(todoThree)

console.log('getTodoList', todos.getTodosList().length)
//bytes binary
const todoListbytes = todos.serializeBinary();
console.log('list Binary', todoListbytes)

const ds = Schema.Todos.deserializeBinary(todoListbytes)

console.log('ds', ds.toObject())

todos.clearTodosList();
console.log('getTodoList', todos.getTodosList().length)

//getters
//console.log(todoOne.getId())
//console.log(todoOne.getTitle())

//binary format
//console.log(todoOne.serializeBinary())

//convert object
//console.log(todoOne.toObject())
fs.writeFileSync('todo', todoListbytes)