/* eslint no-invalid-this: 0 */

export default class AppService {

    constructor() {
        this._urlMessage = `https://app.schaste-club.ru/api/save-message/`;
        this._urlReviews = `https://schaste-club.ru/ajax/get-reviews.php`;

        /**
         * Выполняем fetch запрос
         * @param {string} url
         * @param {object} params
         */
        this.getResource = async (url, params = {}) => {
            const res = await fetch(url, params);
            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, received ${res.status}`);
            }
            return await res.json();
        };

        this.sendMessage = async (data) => {
            return await this.getResource(this._urlMessage, {
                method: `POST`,
                headers: {'content-type': `application/json`},
                body: JSON.stringify(data)
            });
        };

        this.getReviews = async () => {
            return await this.getResource(this._urlReviews);
        };
    }
}
