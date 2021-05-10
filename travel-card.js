import { LitElement, html, css } from 'lit-element';

class TravelCard extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      type: { type: String },
      description: { type: String },
      imageUrl: { type: String },
    };
  }

  constructor() {
    super();
    this.name = 'default name';
    this.type = 'default type';
    this.description = 'default description';
    this.img = 'default image url';
  }

  static get styles() {
    return css`
      .card {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        transition: 0.3s;
        border-radius: 5px;
        width: 300px;
      }
      .card:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      }
      .container {
        padding: 2px 16px;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imageUrl}" width="300px" alt="travelcardimg" />

        <div class="container">
          <h3><b> ${this.name} </b></h3>
          <p>${this.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('travel-card', TravelCard);
