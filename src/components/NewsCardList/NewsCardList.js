import React from 'react';
import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(cards) {
	return (
		<section className='cards-list'>
			<div className='cards-list__container'>
			<NewsCard />
			<NewsCard />
			<NewsCard />
			<NewsCard />

			</div>
		</section>
	)


	
}

export default NewsCardList;
