//const todos = ['Order dog food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

//console.log('You have ${todos.length} todos!')
//console.log('Todo: ${todos[0]}')
//console.log('Todo: ${todos[todos.length - 2]}')

// Create an array with five todos
// You have x todos
// Print the second to last items -> Todo: do work

//const todos = ['Order dog food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

//todos.splice(2, 1)
//todos.push('Buy coffee')
//todos.shift()

//console.log('You have ${todos.length} todos!')

//todos.forEach(function (todo, index) {
    //const num = index + 1
    //console.log(`${num}. ${todo}`)
//})

//1. Order dog food
//2. Clean kitchen
//...

//for (let count = 0; count < todos.length; count++) {
    //const num = count + 1
    //const todo = todos[count]
    //console.log(`${num}. ${todo}`)
//}

const todos = [{
    text: 'Order dog food',
    completed: true
}, {
    text: 'Clean kitchen',
    completed: false
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo){
        return todo.text.toLowercase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'buy food')
console.log(todos)
