import {LitElement, html, css} from 'lit-element';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class AnotherElement extends LitElement {
    static get properties() {
        return {

        }
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    static get styles() {
        return css`
                div{
                    background-color:#000F;
                    color:white;
                    height:100px;
                    width:100%;
                }
            `;
    }

    /**
     * Implement to describe the element's DOM using lit-html.
     * Use the element current props to return a lit-html template result
     * to render into the element.
     */
    render() {
        return html`
            <div>
                Soy otro elemento
            </div>
        `;
    }

}

customElements.define('another-element', AnotherElement);