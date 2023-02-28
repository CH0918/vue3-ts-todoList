<template>
  <div class="wrap">
    <div class="input-box">
      <input
        type="text"
        v-model.trim="todoItem"
        @keydown.enter="addTodoItem"
        class="input dark:gray"
      />
      <div v-show="!todoItem" class="placeholder-text">
        please input your todo item
      </div>
    </div>
    <div class="todo-list" v-for="item in todoList" :key="item.id">
      <input
        type="checkbox"
        :checked="item.isCompleted"
        @click="finishTodoItem(item.id)"
      />
      <div class="item-text">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TodoItem } from '@/models/TodoItem'
const todoList = ref<TodoItem[]>([])
const todoItem = ref('')
function addTodoItem() {
  if (!todoItem.value) return
  todoList.value.push({
    id: todoList.value.length,
    name: todoItem.value,
    isCompleted: false,
  })
  todoItem.value = ''
}
function finishTodoItem(id: number) {
  const target = todoList.value.find((item) => item.id === id)
  if (target) {
    const index = todoList.value.indexOf(target)
    todoList.value.splice(index, 1)
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.wrap {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.input {
  outline: none;
  border: 0;
  width: 300px;
  height: 40px;
  padding: 0 10px;
  border: 1px #ccc solid;
  border-radius: 10px;
  overflow: hidden;
}
.input-box {
  position: relative;
  display: flex;
  align-items: center;
}
.placeholder-text {
  position: absolute;
  height: 40px;
  line-height: 40px;
  left: 20px;
  color: #ccc;
  opacity: 0.5;
  pointer-events: none;
  font-size: 18px;
}
.todo-list {
  display: flex;
}
.item-text {
  margin-left: 10px;
}
</style>
