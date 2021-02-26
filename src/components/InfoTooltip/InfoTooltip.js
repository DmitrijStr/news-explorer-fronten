import React from 'react';

const InfoTooltip = ({ onClose, renderState, onSwitchButton }) => {

	return (
		<section className={`pop-up popup_type_info ${renderState.open && 'pop-up_type_opened'}`} >
			<div className="pop-up__container">
				<button className="pop-up__btn pop-up__btn_action_deny hover-button" type="button" onClick={onClose}>
				</button>
				<p className="pop-up__title">{renderState.message}</p>
				<button className="pop-up__switch-btn" type='button' onClick={onSwitchButton}>Войти</button>
			</div>


		</section>


	)
}

export default InfoTooltip;
