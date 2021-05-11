import { LitElement, html, css } from 'lit-element';
import './travel-card-item';

class TravelCard extends LitElement {
  static get properties() {
    return {
      places: { type: Array },
    };
  }

  static get styles() {
    return css`
      li {
        padding: 0px 10px;
        display: inline-block;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    fetch('https://devschool-2020.firebaseio.com/radu/places.json')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        this.places = data;
      });
  }

  render() {
    // console.log(this.places);
    return html`
      <ul>
        ${Object.entries(this.places).map(
          ([, place]) => html`
            <li>
              <travel-card-item .dest=${place}></travel-card-item>
            </li>
          `
        )}
      </ul>
    `;
  }
}

customElements.define('travel-card', TravelCard);
