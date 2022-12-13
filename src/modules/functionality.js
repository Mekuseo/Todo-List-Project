/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

export const myTodo = [];

// function for adding a new task to array
const addTask = () => {
  const input = document.querySelector('.input');
  const newTask = input.value;
  const todo = { description: newTask, completed: false, index: myTodo.length };
  myTodo.push(todo);
  input.value = '';
};

// function for deleting a task from array
const deleteTask = (index) => {
  myTodo.splice(index, 1);
};

// function for updating a task description
const updateTask = (index, description) => {
  myTodo[index].description = description;
};

// function for updating an item's 'completed' status
const completedTask = (index) => {
  myTodo[index].completed = !myTodo[index].completed;
};

// function for updating an item's index value
const updateIndex = () => {
  myTodo.forEach((todo, index) => {
    todo.index = index + 1;
  });
};

// function for clearing all completed tasks
const clearCompleted = () => {
  myTodo.forEach((todo, index) => {
    if (todo.completed) {
      myTodo.splice(index, 1);
    }
  });
};

// function for updating the array values on local storage
const updateStorage = () => {
  localStorage.setItem('myTodo', JSON.stringify(myTodo));
};
