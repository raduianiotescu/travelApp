import { LionInput } from '@lion/input';

class AddDestinationInput extends LionInput {
  static get styles() {
    return super.styles;
  }
}

customElements.define('add-destination-input', AddDestinationInput);
