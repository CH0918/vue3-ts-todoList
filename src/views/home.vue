<template>
  <div>
    <input type="text" v-model.trim="todoItem" @keydown.enter="addTodoItem" />
    <div class="todo-list" v-for="item in todoList" :key="item.id">
      <input type="checkbox" :checked="item.isFinished" />
      <span>11{{ item.name }}</span>
    </div>
    <ol v-for="i in 5" :key="i">
      <li>item</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const foo = '';
const todoList = ref([
  {
    id: 1,
    name: '吃饭',
    isFinished: true,
  },
]);
const todoItem = ref('');
function addTodoItem() {
  if (!todoItem.value) return;
  todoList.value.push({
    id: todoList.value.length,
    name: todoItem.value,
    isFinished: false,
  });
  todoItem.value = '';
}
</script>

<style scoped></style>
