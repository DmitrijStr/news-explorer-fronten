import React from 'react';
import './SearchForm.css';

function SearchForm() {
	return (
		<form className='search-form'>
			<input className='search-form__input' placeholder="Введите тему новости" required></input>
			<button className='search-form__button'>Искать</button>
		</form>
	)
}

export default SearchForm;
