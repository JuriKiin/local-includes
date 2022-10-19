class KSInclude extends HTMLElement {
    constructor() {
        super();
    }
    
    static get observedAttributes() {
        return ['path'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        fetch(this.getAttribute('path'))
            .then(res => res.text())
            .then(include => this.innerHTML = include)
            .catch(err => console.error(err));
    }

    attributeChangedCallback() {
        this.render();
    }
}

class KSTemplate extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['data', 'path'];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        fetch(this.getAttribute('path'))
            .then(res => res.text())
            .then(template => this.innerHTML = template)
            .catch(err => console.error(err));
    }
}

customElements.define("ks-include", KSInclude);
//customElements.define("ks-template", KSTemplate);

