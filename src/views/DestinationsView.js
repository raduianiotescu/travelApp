import { LitElement, html, css } from 'lit-element';
export class DestinationsView extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }
  static get styles() {
    return css``;
  }
  render() {
    return html` <h1>Destinations View</h1> `;
  }
}
customElements.define('destinations-view', DestinationsView);
