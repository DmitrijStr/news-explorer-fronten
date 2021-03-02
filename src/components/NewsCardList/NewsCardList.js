import React, { useState } from 'react';
import './NewsCardList.css';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ isSearched, view, cards, onBookmarkClick, keyword, savedCards, onArticleDelete, savedArticles }) {

	const [count, setCount] = useState(3);
	const [isRender, setRender] = useState(true)
	
	const showCards = () => {
		setCount(count + 3);
		if (count === cards.length - 3) {
			setRender(false)
		}
	}

	return (
		<section className='cards-list'>
			{
				isSearched && <h2 className='cards-list__title'>Результаты поиска</h2>
			}
			<div className='cards-list__container'>
				{isSearched && (
					cards.slice(0, count).map(card =>
						<NewsCard
							onBookmarkClick={onBookmarkClick}
							card={card}
							source={card.source.name}
							key={card.url}
							url={card.url}
							title={card.title}
							publishedAt={card.publishedAt}
							description={card.description}
							urlToImage={card.urlToImage}
							isSaved={false}
							keyword={keyword}
							onArticleDelete={onArticleDelete}
						/>
					))}
				{savedCards && (
					savedCards.map(card =>
						<NewsCard
							onBookmarkClick={onBookmarkClick}
							card={card}
							source={card.source}
							key={card._id}
							url={card.link}
							title={card.title}
							publishedAt={card.publishedAt}
							description={card.text}
							urlToImage={card.image}
							isSaved={true}
							keyword={card.keyword}
							onArticleDelete={onArticleDelete}
						/>
					)
				)}
			</div>
			{
				isRender & isSearched && <button onClick={showCards} className='cards-list__button' type='button'>Показать еще</button>
			}
		</section>
	)
}

export default NewsCardList;
