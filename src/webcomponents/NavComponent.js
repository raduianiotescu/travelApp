import { LitElement, html, css } from 'lit-element';
import styles from '../global.styles.js';

export class NavComponent extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        /* navbar */

        .nav {
          background: white;
          padding: 0 2rem;
          height: 0rem;
          min-height: 10vh;
          overflow: hidden;
          transition: height 1s ease-in-out;
        }

        .nav .nav-menu {
          justify-content: space-between;
        }

        .nav .toggle-collapse {
          position: absolute;
          top: 0%;
          width: 90%;
          cursor: pointer;
          display: none;
        }

        .nav .toggle-collapse .toggle-icons {
          display: flex;
          justify-content: flex-end;
          padding: 1.7rem 0;
        }

        .nav .toggle-collapse .toggle-icons i {
          font-size: 1.4rem;
          color: var(--text-gray);
        }

        .collapse {
          height: 30rem;
        }

        .nav .nav-items {
          display: flex;
          margin: 0;
        }

        .nav .nav-items .nav-link {
          padding: 1.6rem 1rem;
          font-size: 1.1rem;
          position: relative;
          font-size: 1.1rem;
        }

        .nav .nav-items .nav-link:hover {
          background-color: var(--text-gray);
        }

        .nav .nav-items .nav-link:hover a {
          color: var(--white);
        }

        .nav .nav-brand {
          width: 126px;
        }

        .nav .nav-brand a {
          font-size: 1.6rem;
          padding: 1rem 0;
          display: block;
          font-size: 1.6rem;
        }

        /*mobile nav*/

        .menu {
          display: none;
        }

        .overlay {
          height: 100%;
          width: 100%;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          background-color: #24252a;
          overflow-x: hidden;
          transition: width 0.5s ease 0s;
        }

        .overlay__content {
          display: flex;
          height: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .overlay a {
          padding: 15px;
          font-size: 36px;
          display: block;
          transition: color 0.3s ease 0s;
        }

        .overlay a:hover,
        .overlay a:focus {
          color: white;
        }
        .overlay .close {
          position: absolute;
          top: 20px;
          right: 45px;
          font-size: 60px;
          color: #edf0f1;
        }

        @media screen and (max-height: 450px) {
          .overlay a {
            font-size: 20px;
          }
          .overlay .close {
            font-size: 40px;
            top: 15px;
            right: 35px;
          }
        }

        @media only screen and (max-width: 800px) {
          .nav__links,
          .cta {
            display: none;
          }
          .menu {
            display: initial;
          }
        }

        @media only screen and (max-width: 750px) {
          .nav .nav-menu,
          .nav .nav-items {
            flex-direction: column;
          }

          .nav .toggle-collapse {
            display: initial;
          }
        }

        @media only screen and (max-width: 520px) {
          nav .toggle-collapse {
            width: 80% !important;
          }
        }
      `,
    ];
  }
  static get properties() {
    return {
      myBool: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.myBool = true;
  }

  handleClick(event) {
    this.myBool = !this.myBool;
    console.log(this.myBool);
  }

  render() {
    return html`
     
        ${
          this.myBool
            ? html` <nav class="nav" id="nav">
                <div class="nav-menu flex-row">
                  <div class="nav-brand">
                    <a href="#" class="text-gray">Travel App</a>
                  </div>
                  <div class="toggle-collapse">
                    <div
                      @click=${this.handleClick}
                      class="toggle-icons menu"
                      id="menu"
                    >
                      Menu
                    </div>
                  </div>
                  <div>
                    <ul class="nav-items">
                      <li class="nav-link">
                        <a href="/add">Add Destination</a>
                      </li>
                      <li class="nav-link">
                        <a href="#">Services</a>
                      </li>
                      <li class="nav-link">
                        <a href="#">Destinations</a>
                      </li>
                      <li class="nav-link">
                        <a href="#">About</a>
                      </li>
                      <li class="nav-link">
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>`
            : html`<div class="overlay" id="overlay">
                <a @click=${this.handleClick} class="close" id="close"
                  >&times;</a
                >
                <div class="overlay__content" id="overlay__content">
                  <a @click=${this.handleClick} href="#">Home</a>
                  <a @click="${this.handleClick}" href="/add"
                    >Add Destination</a
                  >
                  <a @click=${this.handleClick} href="#travel-card"
                    >Destinations</a
                  >
                  <a @click=${this.handleClick} href="#category">Articles</a>
                  <a @click=${this.handleClick} href="#footer">Contact</a>
                </div>
              </div>`
        }
      </nav>
    `;
  }
}

customElements.define('navbar-component', NavComponent);
