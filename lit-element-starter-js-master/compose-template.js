import {LitElement, html, css} from 'lit-element';

function headerTemplate(name) {
    return html`<header>${name}</header>`;
  }
  function articleTemplate(year) {
    return html`<article>${year}</article>`;
  }
  function footerTemplate(console) {
    return html`<footer>${console}</footer>`;
  }

export class ComposeTemplate extends LitElement {
  static get styles() {
    return css`
      :host{
        --color-component:#831875dd;
      }
    `;
  }

  static get properties() {
    return {
     
    };
  }

  constructor() {
      super();
  
     this.videoGame ={
         name:"Zelda BoW",
         year:2017,
         console:"Nintendo"
     } 
  
  }

  render() {
    return html`
    <div class="content-game">
      ${headerTemplate(this.videoGame.name)}
      ${articleTemplate(this.videoGame.year)}
      ${footerTemplate(this.videoGame.console)}
    </div>
    `;
  }

  
}

window.customElements.define('compose-template', ComposeTemplate);
