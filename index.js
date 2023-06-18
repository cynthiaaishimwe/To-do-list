const highPriorityInputs = document.querySelectorAll('#high-priority input[type="text"]');
const mediumPriorityInputs = document.querySelectorAll('#medium-priority input[type="text"]');
const lowPriorityInputs = document.querySelectorAll('#low-priority input[type="text"]');
const completedTaskInputs = document.querySelectorAll('#done input[type="text"]');
const progressiveTaskInputs = document.querySelectorAll('#in-progress input[type="text"]');

fetch('https://dummyjson.com/todos')
  .then(res => res.json())
  .then(data => {
    const highPriorityTodos = data.todos.filter(todo => todo.id >= 1 && todo.id <= 2);
    const mediumPriorityTodos = data.todos.filter(todo => todo.id >= 3 && todo.id <= 4);
    const lowPriorityTodos = data.todos.filter(todo => todo.id >= 5 && todo.id <= 6);
    const completedTasks = data.todos.filter(todo => todo.completed === true);
    const progressiveTasks = data.todos.filter(todo => todo.completed === false);
    highPriorityInputs.forEach((input, index) => {
      input.value = highPriorityTodos[index] ? highPriorityTodos[index].todo : '';
    });

    mediumPriorityInputs.forEach((input, index) => {
      input.value = mediumPriorityTodos[index] ? mediumPriorityTodos[index].todo : '';
    });

    lowPriorityInputs.forEach((input, index) => {
      input.value = lowPriorityTodos[index] ? lowPriorityTodos[index].todo : '';
    });

    completedTaskInputs.forEach((input, index) => {
      input.value = completedTasks[index] ? completedTasks[index].todo : '';
    });

    progressiveTaskInputs.forEach((input, index) => {
      input.value = progressiveTasks[index] ? progressiveTasks[index].todo : '';
    });
  })
  .catch(error => {
    console.error('Error fetching API:', error);
  });