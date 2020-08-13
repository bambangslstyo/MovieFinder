

class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#search-input").value;
    }

    render() {
        this.innerHTML = /*html*/ `
            <div class="row mt-3 justify-content-center">
                <div class="col-md-8">
                    <h1 class="text-center">Search Movie</h1>
                    <div class="input-group mb-3">
                        <input type="text" id="search-input" class="form-control" placeholder="Movie title"
                            aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-dark" type="button" id="search-button">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        <hr />
        `;

        this.querySelector("#search-button").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);