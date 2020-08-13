class DataSource {

    static searchMovie(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=b49b03615e3f28bcc39699b882bbf5b2&query=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.total_results == 0) {
                    return Promise.reject(`${keyword} is not found!`);
                } else {
                    return Promise.resolve(responseJson.results);
                }
            })
    }


}

export default DataSource;