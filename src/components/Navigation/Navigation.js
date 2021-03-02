import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navigation.css';
import classNames from 'classnames'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Navigation({ loggedIn, theme, onLoginClick, onLogout }) {

	const currentUser = React.useContext(CurrentUserContext);
	const darkThemeNavigationClassName = classNames('navigation', {
		'navigation_theme_dark': theme === 'dark'
	})

	return (
		<div className={darkThemeNavigationClassName}>
			<NavLink activeClassName='navigation__link_active' exact to={'/'} className='navigation__link'>Главная</NavLink>
			{loggedIn
				? <div>
					<NavLink activeClassName='navigation__link_active' to={'/saved-news'} className='navigation__link'>Сохраненные статьи</NavLink>
					<button onClick={onLogout} className='navigation__button'>{currentUser.name}</button>
				</div>
				: <button onClick={onLoginClick} className='navigation__button'>Авторизоваться</button>
			}
		</div>
	)
}

export default Navigation;
