const { RESTDataSource } = require('apollo-datasource-rest');

export class ChuckNorrisJokesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.chucknorris.io/jokes/';
    }

    async getJoke(category: string) {
        return this.get(`random?category=${category}`);
    }
    async getCategories() {
        return this.get('categories');
    }
}
