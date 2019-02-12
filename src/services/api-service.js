export default class ApiService {
    _baseUrl = 'https://swapi.co/api/';

    async getData(url) {
        const res = await fetch(`${this._baseUrl}${url}`)

        if (!res.ok) {
            throw new Error('Server Error');
        }

        return await res.json();
    }

    getPeople = async () => {
        const people = await this.getData('people');

        return people.results.map(this._transformPersone);
    }

    getPersone = async (id) => {
        const persone = await this.getData(`people/${id}`);
        return this._transformPersone(persone);
    }

    getPlanets = async () => {
        const planets = await this.getData('planets');
        return planets.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getData(`planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarships = async () => {
        const starships = await this.getData('starships');
        return starships.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getData(`starships/${id}`);
        return this._transformPersone(starship);
    }

    _getId = (url) => {
        const regExp = /\/([0-9]*)\/$/;
        return url.match(regExp)[1];
    }

    _transformPlanet = ({ name, population, rotation_period, diameter, url }) => {
        const id = this._getId(url);

        return {
            name,
            population,
            rotationPeriod: rotation_period,
            diameter,
            id,
            img: this.getPlanetImages(id)
        }
    }

    _transformStarship = ({ name, url, model, manufacturer, costInCredits, length, crew, passenger, cargoCapacity }) => {
        const id = this._getId(url);

        return {
            name,
            id,
            img: this.getStarshipsImages(id),
            model,
            manufacturer,
            costInCredits,
            length,
            crew,
            passenger,
            cargoCapacity
        }
    }

    _transformPersone = ({ name, url, gender, birth_year, eye_color }) => {
        const id = this._getId(url);

        return {
            name,
            id,
            img: this.getPersoneImages(id),
            gender,
            birthYear: birth_year,
            eyeColor: eye_color
        }
    }

    getPersoneImages(id) {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }

    getStarshipsImages(id) {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }

    getPlanetImages(id) {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }

}