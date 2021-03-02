import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import './Main.css'

function Main({ renderContent, searchValue, onSearchClick }) {

	return (
		<main>
			<section className='search'>
				<div className='search__content'>
					<h1 className='search__title'>Что творится в мире?</h1>
					<p className='search__info'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
					<SearchForm
						searchValue={searchValue}
						onSearchClick={onSearchClick}
						/>
				</div>
			</section>
			{renderContent}
			<About />
		</main>
	)
}

export default Main;
