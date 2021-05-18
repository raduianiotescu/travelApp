import { LitElement, html } from 'lit-element';

class ToDoListItem extends LitElement {
  static get properties() {
    return {
      todoItem: {
        type: Object,
      },
      isEditing: {
        type: Boolean,
      },
      text: {
        type: String,
      },
      done: {
        type: Boolean,
      },
    };
  }

  render() {
    return html`
      ${this.isEditing
        ? html`<form @submit="${this._handleSubmitEdit}">
            <input type="text" name="text" value="${this.text}" />
          </form>`
        : html`${this.text}
            <button @click="${this._handleEditClick}">Edit</button>`}
    `;
  }

  _handleEditClick(event) {
    event.preventDefault();
    this.isEditing = true;
  }

  _handleSubmitEdit(event) {
    event.preventDefault();
    this.isEditing = false;
    const form = event.target;
    const formData = new FormData(form);
    console.log(Object.fromEntries(formData).text);
    let updateEvent = new CustomEvent(`updateToDo`, {
      detail: Object.fromEntries(formData),
    });
    this.dispatchEvent(updateEvent);
  }
}

customElements.define('todo-list-item', ToDoListItem);
