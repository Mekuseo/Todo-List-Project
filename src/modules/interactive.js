// Remove all todo items from the list in local storage

const deleteAllButton = document.querySelector('.delete-all');
const listContainer = document.querySelector('#tasks');

const removeAllTodo = () => {
  deleteAllButton.addEventListener('click', () => {
    // clearAll();
  });
};

// delete all tasks from the list
const deleteAllList = () => {
  const deleteAllButton = document.querySelector('.delete-all');
  deleteAllButton.addEventListener('click', () => {
    const deleteList = document.querySelectorAll('.completed');
    deleteList.forEach((task) => {
      task.remove();
    });
  });
};

export { removeAllTodo, deleteAllList };