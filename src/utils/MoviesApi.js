const config = {
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json'
    }
}

class Api {
    constructor(config) {
        this.url = config.baseUrl;
        this._headers = config.headers
    }

    getMovies() {
        return fetch (this.url, {
            headers: this._headers
        }).then(res => {
            return this._checkResponse(res)
        })
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }

}

export const moviesApi = new Api(config);

