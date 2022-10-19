const app = {
  init: function () {
    app.inTodoClass();

    const addTask = document.querySelector('form');
    addTask.addEventListener('submit', app.handleTask);
  },

  inTodoClass: () => {
    const todo = document.querySelector('#todo');
    // creation form in todoClass
    const form = document.createElement('form');
    form.setAttribute('id', 'todoForm')
    todo.appendChild(form)

    // creation input in form
    const input = document.createElement('input');
    form.appendChild(input);
    // add Attribute to input
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'todoInput');

    input.addEventListener('focus', app.handleInputFocus);
  },


  handleInputFocus: () => {
    const inputTodo = document.querySelector('#todoInput');
    inputTodo.style.backgroundColor = '#F5EBEA';
  },

  handleTask: (evt) => {
    evt.preventDefault();
    const form = document.querySelector('#todoForm');

    // get input value
    const inputValue = document.querySelector('#todoInput').value;

    // create Task
    const taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'todoTaskDiv');
    form.after(taskDiv);

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('class', 'todoCheckBox');
    taskDiv.appendChild(checkBox)

    const task = document.createElement('div');
    task.textContent = inputValue;
    task.setAttribute('class', 'todoTask');
    checkBox.after(task);
  },

};

document.addEventListener('DOMContentLoaded', app.init);