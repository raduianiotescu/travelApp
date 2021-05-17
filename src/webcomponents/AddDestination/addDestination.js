import { LitElement, css, html } from '@lion/core';
import { ajax } from '@lion/ajax';
import './AddDestinationForm/addDestinationForm.js';
import './AddDestinationInput/addDestinationInput.js';

class AddDestination extends LitElement {
  static get styles() {
    return css`
      add-destination-form {
        margin: 2% 24%;
        padding: 4% 12%;
        border: solid black;
        border-radius: 48px;
        background-color: #a8d6ef;
      }

      button {
        border: none;
        border-radius: 2rem;
        margin: 2% 32%;
        padding: 2%;
        font-size: 1rem;
        cursor: pointer;
        background: white;
      }
    `;
  }

  static get properties() {
    return {
      locations: {
        type: Object,
      },
    };
  }

  render() {
    return html`
      <form name="add-form" @submit=${this._handleFormSubmit}>
        <add-destination-form>
          <add-destination-input
            name="name"
            label="Name"
          ></add-destination-input>
          <add-destination-input
            name="type"
            label="Type"
          ></add-destination-input>
          <add-destination-input
            name="description"
            label="Description"
          ></add-destination-input>
          <add-destination-input
            name="imageUrl"
            label="Image Url"
          ></add-destination-input>
          <button type="submit">Add Destination</button>
        </add-destination-form>
      </form>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    this.locations = Object.fromEntries(formData);
    this.addCall(this.locations);
  }

  async addCall() {
    await ajax.fetchJson(
      'https://devschool-2020.firebaseio.com/radu/places.json',
      {
        method: 'POST',
        body: this.locations,
      }
    );
  }
}

customElements.define('add-destination', AddDestination);
