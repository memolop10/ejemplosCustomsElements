class MiComponente extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.inicializandoComponente();
    }

    inicializandoComponente() {
      const shadow = this.shadowRoot;
      let numeroAleatorio = this.obtenerNumeroAleatorio();
      let arregloNumeros = this.obtenerArregloDeNumeros(numeroAleatorio);
      let numeroParaBuscar = this.obtenerNumeroParaBuscar(arregloNumeros.length);
      console.log('Numero para buscar: ' + numeroParaBuscar);
      shadow.appendChild(this.crearParrafoNumeroParaBuscar(numeroParaBuscar));
      arregloNumeros.forEach(numero => {
      const figura = this.crearDiv(numero, numeroParaBuscar);
      this.addEventWinner(figura,numero,numeroParaBuscar);
      shadow.appendChild(figura);
      });
    }

    crearParrafoNumeroParaBuscar(numeroParaBuscar) {
        let paragraph = document.createElement('p');
        paragraph.textContent = 'Encuentra el numero ' + numeroParaBuscar;
        return paragraph;
    }
 
    obtenerNumeroParaBuscar(cantidad) {
        return Math.floor((Math.random() * cantidad) + 1);
    }
    obtenerNumeroAleatorio() {
        return Math.floor((Math.random() * 10) + 1);
    }
 
    obtenerArregloDeNumeros(cantidad) {
        let arreglo = [];
        while (arreglo.length < cantidad) {
            let numero = Math.floor((Math.random() * cantidad) + 1);
            let numeroEncontrado = arreglo.find((n) => n === numero);
            if (!numeroEncontrado) {
                arreglo.push(numero);
            }
        }
        return arreglo;
    }
 
    crearDiv(numero, numeroParaBuscar) {
        let div = document.createElement('div');
        div.style.width = "150px";
        div.style.height = "150px";
        div.style.border = numeroParaBuscar === numero ? "1px solid red" : '1px solid black';
        div.style.display = 'inline-flex';
        div.style.justifyContent = 'center';
        div.style.alignItems = 'center';
        div.textContent = numero;
        return div;
    }

    addEventWinner(div,numero,numeroParaBuscar){
      div.addEventListener('click',() => {
        this.validarGanador(numero,numeroParaBuscar);
      });
    }

    validarGanador(numero, numeroParaBuscar) {
      if(numero === numeroParaBuscar){
        alert('encontraste el numero');
        this.shadowRoot.innerHTML = '';
        this.inicializandoComponente();
      }
    }
 
};

window.customElements.define('mi-componente', MiComponente);
 
//document.body.appendChild(document.createElement('mi-componente'));