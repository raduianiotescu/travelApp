import { LitElement, html } from 'lit-element';

class ToDoListItem extends LitElement {
  static get properties() {
    return {
      todoItem: {
        type: Object,
      },
    };
  }

  render() {
    return html` ${this.todoItem.text} `;
  }
}

customElements.define('todo-list-item', ToDoListItem);
