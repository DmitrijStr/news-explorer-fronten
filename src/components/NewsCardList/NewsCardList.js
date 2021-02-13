import React from 'react';
import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ isSaved, view, cards }) {
	return (
		<section className='cards-list'>
			<h2 className='cards-list__title'>Результаты поиска</h2>

			<div className='cards-list__container'>

				<NewsCard isSaved={isSaved} view={view} />
				<NewsCard isSaved={isSaved} view={view} />
				<NewsCard isSaved={isSaved} view={view} />

			</div>

			<button className='cards-list__button' type='button'>Показать еще</button>
		</section>
	)



}

export default NewsCardList;
