const input = document.querySelector('#new-task-input');
const listContainer = document.querySelector('#tasks');
const errorMessage = document.querySelector('.error-message');

export default function addEditRemoveTask() {
  const task = input.value;

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
  taskInputContainer.value = task;
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
  });

  // function for removing task from the list
  taskDeleteButton.addEventListener('click', () => {
    listContainer.removeChild(taskContainer);
  });

  // delete all tasks from the list
  const deleteAllButton = document.querySelector('.delete-all');
  deleteAllButton.addEventListener('click', () => {
    listContainer.innerHTML = '';
  });

  // Error message for no task input
   if (task === '') {
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
