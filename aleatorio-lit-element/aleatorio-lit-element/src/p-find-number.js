import {LitElement, html} from 'lit-element';

/**
 * `p-find-number` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class PFindNumber extends LitElement {
    static get properties() {
        return {
            findNumber:{type:Number}
        }
    }

    constructor() {
        super();
    }

    static get styles() {
        return [
            super.styles,
            css``,
        ];
    }

    render() {
        return html`
          <p>Encuentra el numero:</p>
        `;
    }

}
