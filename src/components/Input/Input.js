import React from 'react';
import './Input.css';

function Input({ type, onChange, value, name, description, placeholder, minLength, error }) {

	return (
		<div className='input'>
			<p className='input__description'>{description}</p>
			<input placeholder={placeholder} name={name} type={type} className="input__field" required minLength={minLength} maxLength="40" autoComplete="off" onChange={onChange} value={value} />
			<span>{error}</span>
		</div>
	)
}

export default Input;
