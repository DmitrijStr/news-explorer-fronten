import React from 'react';
import './SavedNews.css';
import Header from '../Header/Header';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function SavedNews({theme, onLoginClick, loggedIn, onLogout, isSaved, savedCards, onArticleDelete}) {
	return (
		<div>
			<Header
				theme={theme}
				onLoginClick={onLoginClick}
				loggedIn={loggedIn}
				onLogout={onLogout}
			/>
			<SavedNewsHeader 
				SavedCards={savedCards.length}
				cards={savedCards}
			/>
			<NewsCardList
				isSaved={isSaved}
				savedCards={savedCards}
				onArticleDelete={onArticleDelete}
			/>
		</div>
	)
}

export default SavedNews;
