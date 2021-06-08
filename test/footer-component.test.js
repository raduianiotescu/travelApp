import { html, fixture, expect } from '@open-wc/testing';

import '../src/webcomponents/FooterComponent';

describe('FooterComponent', () => {
  let element;
  beforeEach(async () => {
    // arrange
    element = await fixture(html`<footer-component></footer-component>`);
  });

  it('renders a footer element', async () => {
    const footerElement = element.shadowRoot.querySelector('footer');
    expect(footerElement).to.exist;
  });

  it('renders a button element of type submit', () => {
    const buttonElement = element.shadowRoot.querySelector('button');
    expect(buttonElement).to.exist;
    expect(buttonElement).to.have.attribute('type', 'submit');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
