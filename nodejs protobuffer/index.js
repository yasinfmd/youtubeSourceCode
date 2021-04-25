const fs = require('fs')
const todos = []

todos.push(
    {
        id: 1,
        title: 'Title',
        content: 'Content',
        isActive: false
    }
)
todos.push(
    {
        id: 2,
        title: 'Title 2',
        content: 'Content 2',
        isActive: true
    }
)
todos.push(
    {
        id: 3,
        title: 'Title 3',
        content: 'Content 3',
        isActive: false
    }
)


fs.writeFileSync('todo.json', JSON.stringify(todos))