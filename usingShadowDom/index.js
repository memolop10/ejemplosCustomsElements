class PopUpInfo extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
        
      // write element functionality in here
        
      // Create a shadow root
        let shadow = this.attachShadow({mode: 'open'});
        
        // Create spans
        let wrapper = document.createElement('span');
        wrapper.setAttribute('class', 'wrapper');
        let icon = document.createElement('span');
        icon.setAttribute('class', 'icon');
        icon.setAttribute('tabindex', 0);
        let info = document.createElement('span');
        info.setAttribute('class', 'info');

        // Take attribute content and put it inside the info span
        let text = this.getAttribute('data-text');
        info.textContent = text;

        // Insert icon
        let imgUrl;
        if(this.hasAttribute('img')) {
            imgUrl = this.getAttribute('img');
        } else {
            imgUrl = 'https://www.guiasnintendo.com/2c-switch/zelda-breath-of-the-wild/guia-zelda-breath-of-the-wild/img/inicio.jpg';
        }
        let img = document.createElement('img');
        img.src = imgUrl;
        icon.appendChild(img);

        // Apply external styles to the shadow dom
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'index.css');

        // Attach the created element to the shadow dom
        shadow.appendChild(linkElem);

        // attach the created elements to the shadow dom
        shadow.appendChild(wrapper);
        wrapper.appendChild(icon);
        wrapper.appendChild(info);

    }
  }

  window.customElements.define('popup-info', PopUpInfo);