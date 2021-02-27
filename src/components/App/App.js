import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import LoginPopup from '../LoginPopup/LoginPopup';
import NewsCardList from '../NewsCardList/NewsCardList';
import NewsApi from '../../utils/NewsApi';
import Preloader from '../Preloader/Preloader';
import { authorize, register, getContent, saveArticle, getInitialArticles, deleteArticle } from '../../utils/MainApi';
import RegisterPopup from '../RegisterPopup/RegisterPopup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import SavedNews from '../SavedNews/SavedNews';
import InfoTooltip from '../InfoTooltip/InfoTooltip';


function App() {
	// const history = useHistory();

	const [loggedIn, setLoggedIn] = useState(false)
	const [token, setToken] = useState('')
	const [currentUser, setcurrentUser] = useState({})
	const [isLoginPopupOpen, setLoginPopupOpen] = useState(false)
	const [isRegisterPopupOpen, setRegisterPopupOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState([]);
	const [savedArticles, setSavedArticles] = useState(null)

	const [infoTooltipState, setInfoTooltipState] = useState({
		message: '',
		success: Boolean,
		open: false
	});

	useEffect(_ => {
		const localdata = localStorage.getItem('searchResult')
		if (localdata) {
			setData(JSON.parse(localdata))
		}
		tokenCheck()
	}, [])


	const getCardsState = (token) => {
		getInitialArticles(token)
			.then((data) => {
				setSavedArticles(data);
			})
			.catch(err => console.log(err))
	}

	const renderContent = (data, isLoading) => {
		if (isLoading) return <Preloader />
		if (data === null) return null
		if (data.length === 0) return <h2>Данных нет</h2>
		return <NewsCardList isSearched={true} cards={data.cards} keyword={data.keyword} onBookmarkClick={handleBookmarkClick} savedCArticles={savedArticles} onArticleDelete={handleArticleDelete}/>
	}

	const handlePopupSwitch = () => {
		if (isLoginPopupOpen) {
			closeAllPopups()
			setRegisterPopupOpen(true)
		} else {
			closeAllPopups()
			setLoginPopupOpen(true)
		}
	}

	const handleSearchClick = ({ keyword }) => {
		setIsLoading(true)
		NewsApi.getArticles(keyword)
			.then(res => {
				setData({ cards: res.articles, keyword: keyword });
				localStorage.setItem('searchResult', JSON.stringify({ cards: res.articles, keyword: keyword }))
				console.log(res)
			})
			.finally(_ => {
				setIsLoading(false)
			})
	}

	const tokenCheck = () => {
		const jwt = localStorage.getItem('jwt');
		if (jwt) {
			setToken(jwt)
			getContent(jwt)
				.then((res) => {
					if (res.data.email) {
						setcurrentUser(res.data)
						setLoggedIn(true)
						getCardsState(jwt)
					}
				}).catch(err => {
					localStorage.removeItem('jwt')
					console.error(err)
				})
		}
	}

	function handleArticleDelete(id) {
		console.log(id, 'delete')
		deleteArticle(token, id)
			.then(() => {
				setSavedArticles(savedArticles.filter(article => article._id !== id))
			})
			.catch(err => console.log(err))
	}

	const handleBookmarkClick = (newArticle) => {
		console.log('data', data)
		console.log('save', newArticle)
		saveArticle(token, newArticle)
			.then((newArticle) => {
				console.log(newArticle.data)
				const newCards = data.cards.map((c) => {
					if (c.url === newArticle.data.link) {
						c.isAdded = true
						c._id = newArticle.data._id
					}
					return c
				})

				setData({ cards: newCards, keyword: newArticle.data.keyword })
				console.log(data)
				setSavedArticles([...savedArticles, newArticle.data]);
			})
			.catch(err => console.log(err))
	}

	const handleLogin = (values) => {
		console.log(values)
		authorize(values.email, values.password)
			.then(data => {
				if (data.token) {
					console.log(data.token)
					localStorage.setItem('jwt', data.token)
					tokenCheck()
					closeAllPopups()
				}
			})
			.catch(err => console.error(err))
	}

	const handleLogout = () => {
		localStorage.removeItem('jwt');
		setcurrentUser({})
		setLoggedIn(false)
		setToken(null)
	}

	const handleRegister = (values) => {
		console.log(values)
		register(values.email, values.password, values.name)
			.then(data => {
				console.log(data)
				if (data.data._id) {
					closeAllPopups()
					setInfoTooltipState({
						message: 'Пользователь успешно зарегистрирован!',
						success: true,
						open: true
					})

				}
			})
			.catch(err => {
				console.log(err)
			})
	}

	const handleLoginPopupOpen = () => {
		setLoginPopupOpen(true)
	}

	const closeAllPopups = () => {
		setLoginPopupOpen(false)
		setRegisterPopupOpen(false)
		setInfoTooltipState({
			open: false
		})
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className='page'>
				<div className='page__content'>
					<Switch>
						<Route exact path="/">
							<Header
								onLoginClick={handleLoginPopupOpen}
								loggedIn={loggedIn}
								onLogout={handleLogout}
							/>
							<Main
								renderContent={renderContent(data, isLoading)}
								onSearchClick={handleSearchClick}
							/>
						</Route>
						<ProtectedRoute
							exact path="/saved-news"
							loggedIn={loggedIn}
							component={SavedNews}
							theme='dark'
							onLoginClick={handleLoginPopupOpen}
							loggedIn={loggedIn}
							onLogout={handleLogout}
							isSaved={true}
							savedCards={savedArticles}
							onArticleDelete={handleArticleDelete}
						>
						</ProtectedRoute>
					</Switch>
					<Footer />
					<LoginPopup
						isOpen={isLoginPopupOpen}
						onClose={closeAllPopups}
						handleLogin={handleLogin}
						handlePopupSwitch={handlePopupSwitch}
					/>
					<RegisterPopup
						isOpen={isRegisterPopupOpen}
						onClose={closeAllPopups}
						handleRegister={handleRegister}
						handlePopupSwitch={handlePopupSwitch}
					/>
					<InfoTooltip
						onClose={closeAllPopups}
						renderState={infoTooltipState}
						onSwitchButton={handlePopupSwitch}
					/>
				</div>
			</div>
		</CurrentUserContext.Provider>
	)
}

export default App;
