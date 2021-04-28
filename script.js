let items = [{
        text: "Завершить текущий челлендж",
        completed: false
    },
    {
        text: "Отдохнуть во время перерыва",
        completed: false
    },
    {
        text: "Помочь напарнику понять код",
        completed: false
    },
    {
        text: "Выиграть в мафию",
        completed: false
    },
    {
        text: "Прийти, увидеть, победить",
        completed: false
    }
]

function render(array) {
    /*let list = document.getElementById('list');
    list.textContent = ''
    for (let i = 0; i < items.length; i++) {
        let tagInput = document.createElement('input');
        tagInput.type = 'checkbox';
        let textContent = document.createElement('p');
        textContent.prepend(items[i].text);
        textContent.append(tagInput);
        list.append(textContent);

    }*/

    let list = document.getElementById('list');
    list.innerHTML = '';
    array.forEach(function(item, i) {
        let deleteBTN = document.createElement('button');
        let check = document.createElement('input');
        check.type = 'checkbox';
        deleteBTN.prepend('X');
        deleteBTN.classList.add('delete-btn')
        deleteBTN.addEventListener('click', () => {
            remove(i);
        });
        check.addEventListener('click', () => {
            checkTodo(item);
        });
        let textContent = document.createElement('p');
        textContent.prepend(item.text);
        textContent.prepend(check);
        textContent.append(deleteBTN);
        list.append(textContent);
    })
};

function remove(index) {
    items.splice(index, 1);
    render(items);
}

function addToDo() {
    let entry = document.getElementById('text-enter');

    items.push({
        text: entry.value,
        completed: false
    });
    render(items);
}

function checkTodo(index) {
    index.completed = !index.completed;
}


render(items);