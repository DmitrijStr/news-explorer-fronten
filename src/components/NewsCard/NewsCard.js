import React from 'react';
import './NewsCard.css';
import classNames from 'classnames';

import cardImg from '../../data/card-img.png'

function NewsCard({ card, link }) {

	const isSaved = true
	// const cardinBookmarkClassName = classNames('card__bookmark-button', 'card__bookmark-button_type_hover', {
	// 	'card__bookmark-button_type_added': isAdded
	// });

	return (
		<div className='card'>
			{isSaved
				?  <div> 
					<div type="button" className='card__tag' > Природа</div> 
					<button type="button" className='card__button card__button_type_delete' />
					</div>
				: <button type="button" className='card__button_type_not-added' />
			}
			<div style={{ backgroundImage: `url(${cardImg})` }} className='card__image' type='button'></div>
			<div className="card__description">
				<p className='card__data'>2 августа, 2019</p>
				<h2 className='card__title'>Национальное достояние – парки</h2>
				<p className='card__text'>В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.</p>
				<p className='card__source'>Лента.ру</p>
			</div>
		</div>
	)
}

export default NewsCard;
