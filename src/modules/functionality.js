/* eslint-disable array-callback-return */

const input = document.querySelector('#new-task-input');
const listContainer = document.querySelector('#tasks');
const errorMessage = document.querySelector('.error-message');
const form = document.getElementById('new-task-form');

let taskStorage = [];
let taskObject;

const saveTodo = () => {
  const allTodos = JSON.stringify(taskStorage);
  localStorage.setItem('taskStorage', allTodos);
};

const getStoredTodos = () => {
  taskStorage = JSON.parse(localStorage.getItem('taskStorage'));
};

const createTask = () => {
  taskObject = {
    description: input.value,
    completed: false,
    index: taskStorage.length + 1,
  };
  if (taskObject.description !== '') {
    taskStorage.push(taskObject);
    saveTodo();
  }
};

const updateIndexs = () => {
  let index = 1;
  taskStorage.forEach((task) => {
    task.index = index;
    index += 1;
  });
};

const clearAll = () => {
  taskStorage = taskStorage.filter((task) => !task.completed);
  updateIndexs();
  saveTodo();
};

export default function addEditRemoveTask(task) {
  // function for adding new task to the list
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task');
  const taskContentContainer = document.createElement('div');
  taskContentContainer.classList.add('content');
  taskContainer.appendChild(taskContentContainer);
  const taskCheckboxContainer = document.createElement('input');
  taskCheckboxContainer.classList.add('checkbox');
  taskCheckboxContainer.type = 'checkbox';
  const taskInputContainer = document.createElement('input');
  taskInputContainer.classList.add('text');
  taskInputContainer.type = 'text';
  taskInputContainer.value = task.description;
  taskInputContainer.setAttribute('readonly', 'readonly');
  taskContentContainer.appendChild(taskCheckboxContainer);
  taskContentContainer.appendChild(taskInputContainer);

  // function for editing and removing task from the list
  const taskActionsContainer = document.createElement('div');
  taskActionsContainer.classList.add('actions');
  const taskEditButton = document.createElement('button');
  taskEditButton.classList.add('edit');
  taskEditButton.innerText = 'Edit';
  const taskDeleteButton = document.createElement('button');
  taskDeleteButton.classList.add('delete');
  taskDeleteButton.innerText = 'Delete';
  taskActionsContainer.appendChild(taskEditButton);
  taskActionsContainer.appendChild(taskDeleteButton);
  taskContainer.appendChild(taskActionsContainer);
  listContainer.appendChild(taskContainer);
  input.value = '';

  taskEditButton.addEventListener('click', () => {
    if (taskEditButton.innerText.toLowerCase() === 'edit') {
      taskEditButton.innerText = 'Save';
      taskInputContainer.removeAttribute('readonly');
      taskInputContainer.focus();
    } else {
      taskEditButton.innerText = 'Edit';
      taskInputContainer.setAttribute('readonly', 'readonly');
    }

    // Update the todo item in local storage
    const taskIndex = taskStorage.indexOf(task);
    taskStorage[taskIndex].description = taskInputContainer.value;
    saveTodo();
  });

  // function for removing task from the list
  taskDeleteButton.addEventListener('click', () => {
    listContainer.removeChild(taskContainer);
  });

  // Remove the todo item from the list of todo items in local storage
  taskDeleteButton.addEventListener('click', () => {
    const taskIndex = taskStorage.indexOf(task);
    taskStorage.splice(taskIndex, 1);
    updateIndexs();
    saveTodo();
  });

  // delete all tasks from the list
  const deleteAllButton = document.querySelector('.delete-all');
  deleteAllButton.addEventListener('click', () => {
    const deleteList = document.querySelectorAll('.completed');
    deleteList.forEach((task) => {
      task.remove();
    });
    clearAll();
  });

  // Remove all todo items from the list in local storage

  // function for updating items object's value for completed
  taskCheckboxContainer.addEventListener('change', () => {
    if (taskCheckboxContainer.checked === true) {
      task.completed = true;
      taskContainer.classList.add('completed');

      // Update the todo item in local storage
      const taskIndex = taskStorage.indexOf(task);
      taskStorage[taskIndex].completed = true;
    } else {
      task.completed = false;
      taskContainer.classList.remove('completed');
      localStorage.removeItem('taskStorage');
    }
    saveTodo();
  });

  if (task.completed === true) {
    taskCheckboxContainer.click();
  }

  // Error message for no task input
  if (task.description === '') {
    taskContainer.remove();
    const error = document.createElement('div');
    error.classList.add('error');
    error.innerText = 'Please enter a task';
    errorMessage.appendChild(error);
    setTimeout(() => {
      error.remove();
    }, 2000);
  }
}

function formSubmission() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createTask();
    addEditRemoveTask(taskObject);
  });
}

const populateTasks = () => {
  if (localStorage.getItem('taskStorage') !== null) {
    getStoredTodos();
    taskStorage.map((task) => {
      addEditRemoveTask(task);
    });
  } else {
    const taskInputContainer = document.createElement('h3');
    taskInputContainer.classList.add('text');
    taskInputContainer.textContent = 'No available tasks!!';
    listContainer.appendChild(taskInputContainer);
  }
};

export { populateTasks, formSubmission };