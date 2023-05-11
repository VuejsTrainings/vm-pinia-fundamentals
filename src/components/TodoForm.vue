<script setup>
    import { ref } from 'vue';
    import { useTodoListStore } from '@/stores/todoList'

    const todo = ref('')
    const store = useTodoListStore();

    function addItemAndClear(item){
        store.addTodo(item);
        todo.value = '';
    }
</script>

<template>
    <form @submit.prevent="addItemAndClear(todo)">
        <input v-model="todo" type="text"/><button>Add</button>
    </form>
</template>

<style scoped>

</style>