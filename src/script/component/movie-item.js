

class MovieItem extends HTMLElement {

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.innerHTML = /*html*/ `
                <div class="card mb-3">
                    <img src="https://image.tmdb.org/t/p/w500/${this._movie.poster_path}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this._movie.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Vote Averagae : ${this._movie.vote_average}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Release Date : ${this._movie.release_date}</h6>
                        <p class="card-text">Overview : ${this._movie.overview}</p>
                    </div>
                </div>
        `;
    }
}

customElements.define("movie-item", MovieItem);