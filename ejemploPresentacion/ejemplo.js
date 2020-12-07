class NuevoElementoWeb extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const div = document.createElement('div');
        div.textContent = 'Developer MEMO';
        shadow.appendChild(div);

    }
    connectedCallback(){
        console.log('Load NuevoElementoWeb agregado');
    }

    disconnedtedCallback(){
        console.log('Removiendo NuevoElementoWeb');
    }

    attributeChangeCallback(name,oldValue,newValue){
        console.log('Cambian propiedades', name, oldValue, newValue);
    }

    static get observedAttributes() {
        return ['c', 'l'];
    }
 
}

customElements.define('nuevo-elemento-web', NuevoElementoWeb);