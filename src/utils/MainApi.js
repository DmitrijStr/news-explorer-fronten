export const BASE_URL = 'http://84.252.129.157';

const checkResponse = (res) => res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);

const register = (email, password, name) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			email, password, name
		})
	})
		.then(checkResponse)
}

const authorize = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({email, password })
	})
		.then(checkResponse)
}


const getContent = (token) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	})
		.then(checkResponse)
}

const saveArticle = (token, newArticle) => {
	return fetch(`${BASE_URL}/articles`, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
		body: JSON.stringify({
			keyword: newArticle.keyword,
			title: newArticle.title,
			text:newArticle.text,
			date:newArticle.date,
			source:newArticle.source,
			link:newArticle.link,
			image: newArticle.image
		})
	}).then(checkResponse)
}

const getInitialArticles = (token) => {
	return fetch(`${BASE_URL}/articles`, {
		method: 'GET',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		}
	}).then(checkResponse)
}

const deleteArticle = (token, id) => {
	return fetch(`${BASE_URL}/articles/${id}`, {
		method: 'DELETE',
		headers: {
			"Content-Type": "application/json",
			"Authorization": `Bearer ${token}`
		},
	})
		.then(checkResponse)
}

export { authorize, register, getContent, saveArticle, getInitialArticles, deleteArticle };
