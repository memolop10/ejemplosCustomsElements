class NuevoElementoWeb extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: 'open'});
        const div = document.createElement('div');
        div.textContent = 'Developer MEMO';
        shadow.appendChild(div);

    }
}

customElements.define('nuevo-elemento-web', NuevoElementoWeb);