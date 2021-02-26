import React, { useCallback, useEffect } from 'react';
import './PopupWithForm.css';

function PopupWithForm({ name, isOpen, onClose, title, children, onSubmit, btnName, switchButton, onSwitchButton, isValid }) {

	const escFunction = useCallback((event) => {
		if (event.keyCode === 27) {
			onClose()
		}
	}, []);

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false);

		return () => {
			document.removeEventListener("keydown", escFunction, false);
		};
	}, []);

	return (
		<section onClick={(e) => {
			if(e.currentTarget === e.target) {
				onClose()
			}
		}} className={`pop-up popup_type_${name} ${isOpen && 'pop-up_type_opened'}`} >
			<div className="pop-up__container">
				<button className="pop-up__btn pop-up__btn_action_deny hover-button" type="button" onClick={onClose}>
				</button>
				<p className="pop-up__title">{title}</p>
				<form className="pop-up__form" method="GET" noValidate onSubmit={onSubmit}>
					{children}
					<button className="pop-up__btn pop-up__btn_action_save" type="submit" disabled={!isValid}>
						{btnName}
					</button>
					<button className="pop-up__switch-btn" type='button' onClick={onSwitchButton}>или {switchButton}</button>
				</form>
			</div>
		</section>
	)
}

export default PopupWithForm;
