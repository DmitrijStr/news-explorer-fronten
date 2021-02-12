import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames'

import Navigation from '../Navigation/Navigation';
import './Header.css'

function Header({ loggedIn, theme, onLoginClick }) {

	const darkThemeHeaderClassName = classNames('header', {
		'header_theme_dark': theme === 'dark'
	})

	const darkBurgerButton = classNames('header__burger', {
		'header__burger_theme_dark': theme === 'dark'
	})

	return (
		<header className={darkThemeHeaderClassName}>
			<NavLink to={'/'} className='header__link'>NewsExplorer</NavLink>
			<Navigation onLoginClick={onLoginClick}  theme={theme}/>
			<button className={darkBurgerButton}>

			</button>
		</header>

	)
}

export default Header;