import { LitElement, html, css } from 'lit-element';
import styles from '../global.styles.js';

export class FooterComponent extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        /* footer  */

        footer.footer {
          height: 100%;
          background: var(--bg-color);
          position: relative;
        }

        footer.footer .container {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        footer.footer .container > div {
          flex-grow: 1;
          flex-basis: 0;
          padding: 3rem 0.9rem;
        }

        footer.footer .container h2 {
          color: var(--white);
        }

        footer.footer .newsletter .form-element {
          background: black;
          display: inline-block;
        }

        footer.footer .newsletter .form-element input {
          padding: 0.5rem 0.7rem;
          border: none;
          background: transparent;
          color: white;
          font-size: 1rem;
          width: 74%;
        }

        footer.footer .newsletter .form-element span {
          background: var(--sky);
          padding: 0.5rem 0.7rem;
          cursor: pointer;
        }

        footer.footer .follow div i {
          color: var(--white);
          padding: 0 0.4rem;
        }

        footer.footer .rights {
          justify-content: center;
        }

        footer.footer .rights h4 a {
          color: var(--white);
        }

        footer input:focus {
          outline: none;
        }

        /* viewport less then or equal to 1130px */

        @media only screen and (max-width: 1130px) {
          footer.footer .container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* viewport less then or equal to 750px */

        @media only screen and (max-width: 750px) {
          footer.footer .container {
            grid-template-columns: repeat(1, 1fr);
          }
        }

        /* viewport less then or equal to 520px */

        @media only screen and (max-width: 520px) {
          footer.footer .container > div {
            padding: 1rem 0.9rem !important;
          }

          footer .rights {
            padding: 0 1.4rem;
            text-align: center;
          }
        }
      `,
    ];
  }

  render() {
    return html` <footer class="footer" id="footer">
      <div class="container">
        <div class="about-us">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quia atque nemo ad modi officiis iure, autem nulla tenetur
            repellendus.
          </p>
        </div>

        <div class="newsletter">
          <h2>Newsletter</h2>
          <p>Stay update with our latest</p>
          <div class="form-element">
            <input type="text" placeholder="Email" />
          </div>
          <h6><button class="btn post-btn">Subscribe</button></h6>
        </div>

        <div class="follow">
          <h2>Follow us</h2>
          <p>Let us be Social</p>
          <a href="www.facebook.com" style="color: white;">
            Check Our Facebook
          </a>
        </div>
      </div>

      <div class="rights flex-row">
        <h4 class="text-gray">
          Copyright ©2021 All rights reserved
        </h4>
      </div>
    </footer>`;
  }
}

customElements.define('footer-component', FooterComponent);
