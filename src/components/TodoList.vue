<script setup>
    import { useTodoListStore } from '@/stores/todoList'
    import { storeToRefs } from "pinia";

    const store = useTodoListStore();
    const { todoList } = storeToRefs(store);

</script>

<template>
    <div v-for="todo in todoList" :key="todo.id" :class="{completed: todo.completed}">
        {{ todo.item }}
    </div>
</template>

<style scoped>
     .completed{
        text-decoration: line-through;
     }
</style>