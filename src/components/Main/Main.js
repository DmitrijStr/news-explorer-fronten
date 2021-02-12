import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';

import NewsCard from '../NewsCard/NewsCard';

import Preloader from '../Preloader/Preloader';

import NewsCardList from '../NewsCardList/NewsCardList';

import './Main.css'

function Main({ }) {
	return (
		<main>
			<section className='search'>
				<div className='search__content'>
					<h1 className='search__title'>Что творится в мире?</h1>
					<p className='search__info'>Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
					<SearchForm />
				</div>
			</section>
			<Preloader />
			{/* <h2 className='cards-list__title'>Результаты поиска</h2> */}
			{/* <NewsCardList /> */}
			<About />
		</main>
	)
}

export default Main;
