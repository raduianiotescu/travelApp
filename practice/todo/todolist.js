import { LitElement, css, html } from 'lit-element';
import './todolistitem';

class ToDoList extends LitElement {
  static get styles() {
    return css`
      article * {
        padding: 1rem;
        border: 1px solid red;
      }
    `;
  }
  static get properties() {
    return {
      _toDos: {
        type: Array,
      },
    };
  }

  constructor() {
    super();
    this._toDos = JSON.parse(localStorage.getItem('todovalue'));
  }

  connectedCallback() {
    super.connectedCallback();
    // console.log('lit-element connected');
  }

  render() {
    return html`<h1>To do list</h1>
      <ul>
        ${this._toDos.map(
          (item, index) => html` <li>
            <todo-list-item
              .text=${item.text}
              .done=${item.done}
              @updateToDo=${event => this._handleUpdateToDo(index, event)}
            ></todo-list-item>
          </li>`
        )}
      </ul>

      <form @submit="${this._handleFormSubmit}">
        <label for="text">Text</label>
        <input type="text" name="text" id="text" />
        <button type="submit">Add</button>
      </form>

      <article
        @click="${event => {
          console.log(event.target, event.currentTarget);
        }}"
      >
        <div>
          <p><span>Hello World</span></p>
        </div>
      </article>`;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData));
    console.log(event);
    const newToDo = { ...Object.fromEntries(formData), done: false };
    this._toDos = [...this._toDos, newToDo];
    this._updateMyStorage();

    form.reset();
  }

  _updateMyStorage() {
    localStorage.setItem('todovalue', JSON.stringify(this._toDos));
  }

  _handleUpdateToDo(index, event) {
    this._toDos = [
      ...this._toDos.slice(0, index),
      { text: event.detail.text, done: this._toDos[index].done },
      ...this._toDos.slice(index + 1),
    ];
    this._updateMyStorage();
  }
}

customElements.define('todo-list', ToDoList);
