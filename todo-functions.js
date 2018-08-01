// Setup a root div
// Setup and append a checkbox (set type attribute)
// someNode.setAttribute('type', 'checkbox')
// Setup and append a span (set text)
// Setup and append a button (set text)

// Get the DOM elements for an individual note
const generatetodoDom = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkbox)

    // Set up the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = 'You have ${incompleteTodos.length} todos left'
}



}