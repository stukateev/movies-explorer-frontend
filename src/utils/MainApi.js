const config = {
    baseUrl: 'https://api.film-find.nomoredomains.work',
    headers: {
        authorization: localStorage.getItem('token'),
        'Content-Type': 'application/json',
    },
}

class Api {
    constructor(config) {
        this.url = config.baseUrl;
        this.headers = config.headers;
    }

    tokenCheck() {
        this._updateToken();
        return fetch(`${this.url}/users/me`,{
            headers: this.headers
        }).then(res => {return this._checkResponse(res)})
    }


    postMovie(country, director, duration, year, description, image, trailerLink, nameRU, nameEN, thumbnail, movieId) {
        return fetch(`${this.url}/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                "country": country,
                "director": director,
                "duration": duration,
                "year": year,
                "description": description,
                "image": image,
                "trailerLink": trailerLink,
                "nameRU": nameRU,
                "nameEN": nameEN,
                "thumbnail": thumbnail,
                "movieId": movieId
            })
        }).then(res => {return this._checkResponse(res)})
    }
    patchUser(name, email) {
        this._updateToken();
        return fetch(`${this.url}/users/me`,{
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                "name": name,
                "email": email
            })
        }).then(res => {return this._checkResponse(res)})
    }
    register(name, email, password) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                "password": password,
                "email": email,
                "name": name
            })
        }).then(res => {
            return this._checkResponse(res)
        })
    }

    login(email, password) {
        this._updateToken();
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                "password": password,
                "email": email
            })
        }).then(res => {
            console.log(res)
            return this._checkResponse(res)
        })
    }

    _updateToken() {
        config.headers.authorization = localStorage.getItem('token');
    }

    deleteMovie(id) {
        return fetch(`${this.url}/movies/${id}`, {
            method: "DELETE",
            headers: this.headers,
        }).then(res => {return this._checkResponse(res)})
    }

    getMovies() {
        return fetch(`${this.url}/movies`, {
            headers: this.headers,
        }).then(res => {return this._checkResponse(res)})
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`);
    }
}

export const mainApi = new Api(config);