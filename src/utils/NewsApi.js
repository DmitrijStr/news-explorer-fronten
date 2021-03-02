const url = 'https://newsapi.org/v2';
const apiKey = '8516263f8ffc472495d8a056b5a5c68d';

const pastSevenDays = new Date()
pastSevenDays.setDate(pastSevenDays.getDate() - 7)
pastSevenDays.toISOString()



class NewsApi {
	constructor({ baseUrl, apiKey }) {
		this.baseUrl = baseUrl;
		this.apiKey = apiKey;
	}

	getArticles(keyword) {
		console.log(keyword)
		return fetch(`${this.baseUrl}/everything?q=${keyword}&apiKey=${this.apiKey}&pageSize=6&from=${pastSevenDays}`) // country param is not supported in everything
			.then(res => {
				if (res.ok) {
					return res.json()
				}
				return Promise.reject(res.status)
			})
	}
}

export default new NewsApi({
	baseUrl: url,
	apiKey
});
