import React from 'react';
import './SavedNewsHeader.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function SavedNewsHeader({ cards }) {

	const currentUser = React.useContext(CurrentUserContext);

	function count(arr) {
		const obj = {}
		arr.forEach(function (el) {

			if (obj[el.keyword]) {
				obj[el.keyword] = obj[el.keyword] + 1;
			} else {
				obj[el.keyword] = 1;
			}
		});
		return obj
	}

	const keywords = Object.keys(count(cards));
	const keywordsLength = keywords.length;

	return (
		<section className='saved-news-header'>
			<h2 className='saved-news-header_title'>Сохранённые статьи</h2>
			<p className='saved-news-header__description'>{currentUser.name}, у вас {keywordsLength} сохранённых статей</p>
			<div>
				{
					keywordsLength > 3
						? <p className='saved-news-header__tags'>По ключевым словам: <b>{keywords.slice(0, 2).join(', ')}</b> и <b> {keywordsLength - 2}-м другим</b></p>
						: <p className='saved-news-header__tags'>По ключевым словам: <b>{keywords.join(', ')}</b></p>
				}
			</div>
		</section>
	)
}

export default SavedNewsHeader;
