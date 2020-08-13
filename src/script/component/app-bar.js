

class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Movie Finder</a>
                
            </div>
        </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);