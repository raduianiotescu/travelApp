import { LitElement, html, css } from 'lit-element';
import { Router } from '@vaadin/router';
import './pages/Homepage.js';
import './pages/AddPage.js';
import './webcomponents/NavComponent.js';
import './webcomponents/FooterComponent';
import styles from './global.styles.js';

export class TravelApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return [
      styles,
      css`
        :host {
          display: block;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.title = 'DevSchool app';
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById('main');
    const router = new Router(outlet);
    router.setRoutes([
      { path: '/', component: 'home-page' },
      { path: '/add', component: 'add-destination' },
      { path: '(.*)', component: 'x-not-found-view' },
    ]);
  }

  render() {
    return html`
      <navbar-component></navbar-component>
      <main id="main"></main>
      <footer-component></footer-component>
    `;
  }
}
