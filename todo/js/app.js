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
  },

  handleTask: (evt) => {
    evt.preventDefault();
    const form = document.querySelector('#todoForm');

    // get input value
    const inputValue = document.querySelector('#todoInput').value;

    // TODO DIV QUI ENTOURE CHECKBOX ET TASK TAILLE DE LA DIV = TAILLE DE INPUT TEXT ET TAILLE DE TASK = TAILLE DE LA DIV - TAILLE DE INPUT CHECKBOX

    // create Task
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.setAttribute('id', 'todoCheckBox');
    form.after(checkBox);

    const task = document.createElement('div');
    task.textContent = inputValue;
    task.setAttribute('id', 'todoTask');
    checkBox.after(task);


    
  }

};

document.addEventListener('DOMContentLoaded', app.init);