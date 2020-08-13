import '../component/movie-list.js'
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchInput = document.querySelector("search-bar");
    const movieList = document.querySelector("movie-list");

    const popularMovies = () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=b49b03615e3f28bcc39699b882bbf5b2`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.results) {
                    return Promise.resolve(renderResult(responseJson.results));
                } else {
                    return Promise.reject(responseJson.status_message);
                }
            })
            .catch(error => {
                fallbackResult(error)
            })
    }

    popularMovies();


    const onButtonSearchClicked = () => {
        DataSource.searchMovie(searchInput.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        movieList.movies = results;
    }

    const fallbackResult = message => {
        movieList.renderError(message);
    }

    searchInput.clickEvent = onButtonSearchClicked;

}

export default main;