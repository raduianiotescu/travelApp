import { LitElement, css, html } from '@lion/core';
import { ajax } from '@lion/ajax';
import { loadDefaultFeedbackMessages } from '@lion/validate-messages';
import { Required, MinLength } from '@lion/form-core';
import { isRomania } from '../validators/isRomania';
import '../webcomponents/TravelCard/travel-card.js';
import '../../node_modules/@lion/form/lion-form';
import '../../node_modules/@lion/input/lion-input';

class AddDestination extends LitElement {
  static get styles() {
    return css`
      lion-form {
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
      <lion-form>
        <form name="add-form" @submit=${this._handleFormSubmit}>
          <lion-input
            name="name"
            label="Name"
            .fieldName="${'name'}"
            .validators="${[new Required(), new MinLength(5)]}"
          ></lion-input>
          <lion-input
            name="type"
            label="Type"
            .fieldName="${'type'}"
            .validators="${[new Required()]}"
          ></lion-input>
          <lion-input
            name="description"
            label="Description"
            .fieldName="${'description'}"
            .validators="${[new Required()]}"
          ></lion-input>
          <lion-input
            name="imageUrl"
            label="Image Url"
            .fieldName="${'imageUrl'}"
            .validators="${[new Required()]}"
          ></lion-input>
          <button type="submit">Add Destination</button>
        </form>
      </lion-form>
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
