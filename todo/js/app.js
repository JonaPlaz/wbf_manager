const app = {
  init: function () {
    app.bodyTag();
    app.inTodoClass();
  },

  bodyTag: () => {
    const body = document.querySelector('body');
    body.style.backgroundColor = '#DEBDB8';
  },

  inTodoClass: () => {
    const todo = document.querySelector('#todo');
    // creation form in todoClass
    const form = document.createElement('form');
    todo.appendChild(form)

    // creation input in form
    const input = document.createElement('input');
    form.appendChild(input);
    // add Attribute to input
    input.setAttribute('type', 'text');
  }

};

document.addEventListener('DOMContentLoaded', app.init);