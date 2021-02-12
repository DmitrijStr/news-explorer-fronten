import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ghLogo from '../../images/github-icon.svg';
import fbLogo from '../../images/facebook-icon.svg';
import './Footer.css';

function Footer() {
	return (
		<footer className='footer'>
			<p className='footer__copyright'>© 2020 Supersite, Powered by News API</p>
			<div className='footer__links'>
				<div className='footer__navbar'>
					<Link to={'/'} className='footer__navbar-link'>Главная</Link>
					<a className='footer__navbar-link' href="https://praktikum.yandex.ru">Яндекс.Практикум</a>
				</div>
				<div className='footer__socials'>
					<a className='footer__link' target='_blank' href="https://github.com/DmitrijStr/news-explorer-frontend"><img className="footer__social-icon"
						src={ghLogo} alt="Изображение логтотип github" /></a>
					<a className='footer__link' target='_blank' href="https://www.facebook.com"><img className="footer__social-icon"
						src={fbLogo} alt="Изображение логтотип facebook" /></a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;
