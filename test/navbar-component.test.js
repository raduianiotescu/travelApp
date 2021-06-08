import { html, fixture, expect } from '@open-wc/testing';

import '../src/webcomponents/NavComponent';

describe('NavComponent', () => {
  let element;
  beforeEach(async () => {
    // arrange
    element = await fixture(html`<navbar-component></navbar-component>`);
  });

  it('renders a nav element', async () => {
    const navElement = element.shadowRoot.querySelector('nav');
    expect(navElement).to.exist;
  });

  it('renders an unordered list with 5 list items', () => {
    const ulElement = element.shadowRoot.querySelector('ul');
    expect(ulElement).to.exist;
    expect(ulElement.children).to.have.lengthOf(5);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
