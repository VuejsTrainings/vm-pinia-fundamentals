import { defineStore } from "pinia";

export const useTodoListStore = defineStore('TodoList', {
    state: () => ({
        todoList: [],
        id: 0
    }),
    actions: {
        addTodo(item){
            this.todoList.push({ item, id: this.id++, completed: false });
        },
        deleteItem(itemId){
            this.todoList = this.todoList.filter( item => item.id !== itemId )
        },
        toggleCompleted(todoId) {
            const todo = this.todoList.find( item => item.id === todoId );
            todo.completed = !todo.completed;
        }
    }
})