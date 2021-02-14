import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
	return (
		<section className='saved-news-header'>
			<h2 className='saved-news-header_title'>Сохранённые статьи</h2>
			<p className='saved-news-header__description'>Грета, у вас 5 сохранённых статей</p>
			<div>
			<p className='saved-news-header__tags'>По ключевым словам: <b>Природа</b>, <b>Тайга</b> и <b> 2-м другим</b></p>
			</div>
		</section>
	)
}

export default SavedNewsHeader;
