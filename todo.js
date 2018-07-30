const todos = ['Order dog food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

console.log('You have ${todos.length} todos!')
console.log('Todo: ${todos[0]}')
console.log('Todo: ${todos[todos.length - 2]}')

// Create an array with five todos
// You have x todos
// Print the second to last items -> To do: do work



const todos = ['Order dog food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise']

todos.splice(2, 1)
todos.push('Buy coffee')
todos.shift()

console.log('You have ${todos.length} todos!')
console.log(todos)
