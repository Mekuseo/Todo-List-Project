// Remove all todo items from the list in local storage

const deleteAllButton = document.querySelector('.delete-all');
const listContainer = document.querySelector('#tasks');

const removeAllTodo = () => {
  deleteAllButton.addEventListener('click', () => {
    localStorage.clear();
  });
};

// delete all tasks from the list
const deleteAllList = () => {
  const deleteAllButton = document.querySelector('.delete-all');
  deleteAllButton.addEventListener('click', () => {
    listContainer.innerHTML = '';
  });
};

export { removeAllTodo, deleteAllList };