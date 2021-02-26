import React from 'react';
import './NewsCard.css';
import classNames from 'classnames';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function NewsCard({card, isSaved, title, publishedAt, urlToImage, description, source, url, onBookmarkClick, keyword, onArticleDelete }) {

	const currentUser = React.useContext(CurrentUserContext);
	function handleBookmarkClick() {
		onBookmarkClick({
			keyword: keyword,
			title: title,
			text: description,
			date: publishedAt,
			source: source,
			link: url,
			image: urlToImage
		});
	}

	function handleDeleteClick() {
		onArticleDelete(card._id);
	}

	return (
		<div className='card'>
			{isSaved
				?  <div>
					<div className='card__tag'>{keyword}</div>
					<button type="button" className='card__button card__button_type_delete' onClick={handleDeleteClick}/>
					</div>
				: <button type="button" className='card__button card__button_type_bookmark' onClick={handleBookmarkClick}/>
			}
			<img alt={`изображение ${title}`} src={urlToImage} className='card__image' />
			<div className="card__description">
				<p className='card__data'>{publishedAt}</p>
				<h2 className='card__title'>{title}</h2>
				<p className='card__text'>{description.slice(0, 148) + '...'}</p>
				<a className='card__url' href={url} target='blank'><p className='card__source'>{source}</p></a>
			</div>
		</div>
	)
}

export default NewsCard;
