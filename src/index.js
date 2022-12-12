/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import './style.css'

const myTodo = [
  {description: 'Wash the dishes', completed: false, index: 0},
  {description: 'Clean the room', completed: false, index: 1},
  {description: 'Do the laundry', completed: false, index: 2},
  {description: 'Take out the trash', completed: false, index: 3}
]

let todos = document.querySelector('.todos');

const todoList = myTodo.map((todo) => {
  return `<li class="todo-item">
    <input type="checkbox" id="todo-${todo.index}" />
    <label for="todo-${todo.index}">${todo.description}</label>
  </li>`
}).join('')

todos.innerHTML = todoList
