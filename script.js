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
                this.print(i);
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
        },
        print: function(index) {
            if (this.items[index].completed === true) {
                console.log('[X]' + this.items[index].text);
            } else {
                console.log('[ ]' + this.items[index].text);
            }
        },
        complete: function(index) {
            this.items[index].completed = true;
        }
    }
    return todoListObject;
}

const todoList = createTodoList();
todoList.add('Перейти к следующему релизу');
todoList.complete(0);
todoList.printAll();