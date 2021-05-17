import { LionForm } from '@lion/form';

class AddDestinationForm extends LionForm {
  static get styles() {
    return super.styles;
  }
}

customElements.define('add-destination-form', AddDestinationForm);
