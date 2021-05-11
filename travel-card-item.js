import { LitElement, html, css } from 'lit-element';

class TravelCardItem extends LitElement {
  static get properties() {
    return {
      dest: { type: Object },
    };
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
        <img src="${this.dest.imageUrl}" width="300px" alt="travelcardimg" />
        <div class="container">
          <h3><b> ${this.dest.name} </b></h3>
          <p>${this.dest.description}</p>
        </div>
      </div>
    `;
  }
}

customElements.define('travel-card-item', TravelCardItem);
