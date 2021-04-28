function createTodoList() {
    const todoListObject = {
        items: [{
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
                completed: true
            },

        ],
        printAll: function() {
            for (let i = 0; i < this.items.length; i++) {
                console.log(this.items[i].text)
            }
        },
        add: function(addAction) {
            this.items.unshift({
                text: addAction,
                completed: false
            })
        },
        remove: function(index) {
            this.items.splice(index, 1);
        }
    }
    return todoListObject;
}

const todoList = createTodoList();
todoList.add('Перейти к следующему релизу');
todoList.remove(1);
todoList.printAll();