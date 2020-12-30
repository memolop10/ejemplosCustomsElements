import {LitElement, html, css} from 'lit-element';


export class PerformantTemplate extends LitElement {
  static get styles() {
    return css`
      :host{
        --color-component:#3950cfdd;
      }
      .myBool{
        --color-component:#811b5f;
      }

      p,span{
        color:var(--color-component);  
      }

    `;
  }

  static get properties() {
    return {
     myString:String,
     myArray:Array,
     myBoolean:Boolean
    };
  }

  constructor() {
    super();
    this.myString = 'Hola MEMO';
    this.myArray = ['este','es','mi','Array'];
    this.myBoolean = true;
  }

  render() {
    return html`
     <span>${this.myString}</span>

     ${this.myArray.map(i => html`<p>${i}</p>`)}

     ${this.myBoolean?
        html`<p class="myBool">Me rendereo cuando Soy TRUE</p>`:
        html`<p class="myBool">Me rendereo cuando Soy FALSE</p>`
     }

     <button @click="${this.puchale}">Puchame</button>
    `;
  }

  puchale(e){
      console.log(e.target);
  }
}

window.customElements.define('performant-template', PerformantTemplate);
