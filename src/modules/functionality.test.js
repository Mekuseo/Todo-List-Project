const { populateTasks, formSubmission, addEditRemoveTask } = require('./functionality');

describe('populateTasks', () => {
  it('should populate tasks', () => {
    const taskStorage = [
      {
        description: 'task1',
        completed: false,
        index: 1,
      },
      {
        description: 'task2',
        completed: false,
        index: 2,
      },
    ];
    localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
    populateTasks();
    expect(taskStorage.length).toBe(2);
  });

  it('should not populate tasks', () => {
    const taskStorage = [];
    localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
    populateTasks();
    expect(taskStorage.length).toBe(0);
  });
});