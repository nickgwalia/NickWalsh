const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

const findNote = function (notes, noteTitle) {
    const index = notes.findIndex(function (note,index){
        return note.title === noteTitle
    })
    return notes[index]
}

const note = findNote(notes, 'Office modification')
console.log(note)

// console.log(notes.pop())
// notes.push('My new note')

//console.log(notes.length)
//console.log(notes[notes.length - 1])

//console.log(notes.shift())
//notes.unshift('My first note')

//notes.splice(1, 1, 'This is the new second item')

//notes[2] = 'This is now the new note 3'

//notes.forEach(function (item, index) {
 //   console.log(index)
 //   console.log(item)
//})



// Counting... 1
//for (let count = 0; count <= 2; count++) {
    //console.log(count)
//}

//for (let count = 0; count <notes.legth; count++){
    //console.log(notes[count])
//}

console.log(notes.length)
console.log(notes)

console.log(notes.indexOf({}))
