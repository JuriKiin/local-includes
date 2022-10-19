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