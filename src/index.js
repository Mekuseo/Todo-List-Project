import './style.css';
import addEditRemoveTask from './modules/functionality.js';

window.addEventListener('load', () => {
  const form = document.querySelector('#new-task-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // this function adds the new task and returns the task container
    addEditRemoveTask();
  });
});