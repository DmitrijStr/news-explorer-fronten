import React, { useRef } from 'react';
import './SearchForm.css';

function SearchForm({ searchValue, onSearchClick }) {

	const searchRef = React.useRef(null);

	function handleSubmit(e) {
		e.preventDefault();
		onSearchClick({
			keyword: searchRef.current.value
		})
	}




	return (
		<form className='search-form' onSubmit={handleSubmit}>
			<input ref={searchRef} className='search-form__input' placeholder="Введите тему новости" required></input>
			<button className='search-form__button'>Искать</button>
		</form>
	)
}

export default SearchForm;
