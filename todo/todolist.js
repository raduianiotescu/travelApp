import { LitElement, html } from 'lit-element';
import './todolistitem.js';

class ToDoList extends LitElement {
  static get properties() {
    return {
      _toDos: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this._toDos = [
      { text: 'lorem ipsum', done: true },
      { text: 'hello world', done: false },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('lit-element connected');
  }

  render() {
    return html`<h1>To do list</h1>
      <ul>
        ${this._toDos.map(
          item => html` <li>
            <todo-list-item .todoItem=${item}></todo-list-item>
          </li>`
        )}
      </ul>

      <form @submit="${this._handleFormSubmit}">
        <label for="text">Text</label>
        <input type="text" name="text" id="text" />
        <button type="submit">Add</button>
      </form> `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
    console.log(event);
    const newToDo = { ...Object.fromEntries(formData), done: false };
    this._toDos = [...this._toDos, newToDo];

    form.reset();
  }
}

customElements.define('todo-list', ToDoList);
