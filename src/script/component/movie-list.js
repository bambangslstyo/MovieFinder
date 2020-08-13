import './movie-item.js';

class MovieList extends HTMLElement {

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    renderError(message) {
        this.innerHTML = `<div class="col">
        <h1 class="text-center">${message}</h1>
    </div>`;
    }

    render() {
        this.innerHTML = "";
        this._movies.forEach(movie => {
            const movieItem = document.createElement("movie-item");
            movieItem.setAttribute("class", "col-md-4");
            movieItem.movie = movie
            this.appendChild(movieItem);
        });
    };
}

customElements.define("movie-list", MovieList);