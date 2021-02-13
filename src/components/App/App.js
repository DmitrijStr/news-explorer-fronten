import React, { useState } from 'react';

import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

function App() {

	const [isLoginPopupOpen, setLoginPopupOpen] = useState(false)

	const handleLoginPopupOpen = () => {
		setLoginPopupOpen(true)
	}

	const closeAllPopups = () => {
		setLoginPopupOpen(false)
	}

return (
	<div className='page'>
		<div className='page__content'>

			<Switch>
				<Route exact path="/">
					<Header onLoginClick={handleLoginPopupOpen} />
					<Main />
				</Route>
				<Route exact path="/saved-news">
					<Header theme='dark' />
					<SavedNewsHeader />
					<NewsCardList isSaved={true}/>
				</Route>
			</Switch>
			<Footer />
			<LoginPopup
				isOpen={isLoginPopupOpen}
				onClose={closeAllPopups}
			/>
		</div>
	</div>
)
}

export default App;
