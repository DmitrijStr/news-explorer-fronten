import React from 'react';
import './Input.css';

function Input({ type, onChange, value, name, description }) {

	return (
		<div className='input'>
			<p className='input__description'>{description}</p>
			<input name={name} type={type} className="input__field" required minLength="2" maxLength="40" autoComplete="off" onChange={onChange} value={value} />
		</div>
	)
}

export default Input;