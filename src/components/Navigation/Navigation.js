import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import classNames from 'classnames'

function Navigation({ loggedIn, theme, onLoginClick }) {

	const darkThemeNavigationClassName = classNames('navigation', {
		'navigation_theme_dark': theme === 'dark'
	})

	return (
		<div className={darkThemeNavigationClassName}>
			<NavLink activeClassName='navigation__link_active' exact to={'/'} className='navigation__link'>Главная</NavLink>
				<NavLink activeClassName='navigation__link_active' to={'/saved-news'} className='navigation__link'>Сохраненные статьи</NavLink>
				<button onClick={onLoginClick} className='navigation__button'>Авторизоваться</button>
		</div>
	)
}

export default Navigation;
