let input = prompt('What would you like to do?')
const toDo = ['Go to Tesco', 'Do the section on functions'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******')
        for (i = 0; i < toDo.length; i++) {
            console.log(`${i}: ${toDo[i]}`)
        }
        console.log('******')
    }
    else if (input === 'new') {
        const newToDo = prompt('Okay, what is the new to do?')
        toDo.push(newToDo); {
            console.log(`${newToDo} was added to the list`)
        }
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('Hm, what do you want to delete?'));
        if (!Number.isNaN(index)) {
            const deleted = toDo.splice(index, 1);
            console.log(`Okay deleted ${deleted[0]}`)
        }
    }
    input = prompt('What would you like to do?')
}

console.log('Ok you quit')