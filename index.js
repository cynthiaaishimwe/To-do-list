

fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(data => {
  const todoListDiv = document.getElementById('priorities');

  
  data.forEach(todo => {
    const todoItem = document.createElement('p');
    todoItem.textContent = todo.title;
    todoListDiv.appendChild(todoItem);
  });
})
.catch(error => {
  console.error('Error fetching API:', error);
});

