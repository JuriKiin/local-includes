class KSInclude extends HTMLElement {
    constructor() {
        super();
    }
    
    static get observedAttributes() {
        return ['data'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        fetch(this.getAttribute('data'))
            .then(res => res.text())
            .then(include => this.innerHTML = include)
            .catch(err => console.error(err));
    }

    attributeChangedCallback() {
        this.render();
    }
}

customElements.define("ks-include", KSInclude);