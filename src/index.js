/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-mutable-exports */

import './style.css';
import myTodo from './modules/functionality.js';

const todos = document.querySelector('.todos');

const todoList = myTodo.map((todo) => `<li class="todo-item">
    <input type="checkbox" id="todo-${todo.index}" />
    <label for="todo-${todo.index}">${todo.description}</label>
  </li>`).join('');

todos.innerHTML = todoList;
