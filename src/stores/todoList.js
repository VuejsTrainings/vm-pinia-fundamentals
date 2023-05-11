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
        }
    }

})