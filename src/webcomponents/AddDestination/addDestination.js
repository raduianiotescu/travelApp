import { LitElement, css, html } from '@lion/core';
import { ajax } from '@lion/ajax';
import './AddDestinationForm/addDestinationForm.js';
import './AddDestinationInput/addDestinationInput.js';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { Required, MinLength } from '@lion/form-core';
import { isRomania } from '../../validators/isRomania';

class AddDestination extends LitElement {
  static get styles() {
    return css`
      add-destination-form {
        margin: 2% 24%;
        padding: 4% 12%;
        border: solid black;
        border-radius: 48px;
        background-color: #8e9094;
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
    loadDefaultFeedbackMessages();
    return html`
      <add-destination-form>
        <form name="add-form" @submit=${this._handleFormSubmit}>
          <add-destination-input
            name="name"
            label="Name"
            .fieldName="${'name'}"
            .validators="${[new Required(), new MinLength(5)]}"
          ></add-destination-input>
          <add-destination-input
            name="type"
            label="Type"
            .fieldName="${'type'}"
            .validators="${[new Required()]}"
          ></add-destination-input>
          <add-destination-input
            name="description"
            label="Description"
            .fieldName="${'description'}"
            .validators="${[new Required()]}"
          ></add-destination-input>
          <add-destination-input
            name="imageUrl"
            label="Image Url"
            .fieldName="${'imageUrl'}"
            .validators="${[new Required()]}"
          ></add-destination-input>
          <button type="submit">Add Destination</button>
        </form>
      </add-destination-form>
    `;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    this.locations = Object.fromEntries(formData);
    let isFormValid = !form.parentElement.showsFeedbackFor.includes('error');

    console.log({ isFormValid });
    if (isFormValid) {
      this.addCall(this.locations);
    }
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
