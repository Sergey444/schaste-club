/* eslint no-invalid-this: 0 */

export default class AppService {

    _urlMessage = `https://app.schaste-club.ru/api/save-message/`;
    _urlReviews = `https://schaste-club.ru/ajax/get-reviews.php`;

    /**
     * Выполняем fetch запрос
     * @param {string} url
     * @param {object} params
     */
    getResource = async (url, params = {}) => {
        const res = await fetch(url, params);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    sendMessage = async (data) => {
        return await this.getResource(this._urlMessage, {
            method: `POST`,
            headers: {'content-type': `application/json`},
            body: JSON.stringify(data)
        });
    };

    getReviews = async () => {
        return await this.getResource(this._urlReviews);
    }
}
