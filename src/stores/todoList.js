import { defineStore } from "pinia";

export const useTodoListStore = defineStore('TodoList', {
    state: {
        state: () => ({
            todoList: []
        })
    }
})