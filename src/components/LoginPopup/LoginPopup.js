import React, { useState } from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import './LoginPopup.css';

function LoginPopup({ isOpen, onClose }) {

	const [data, setData] = useState({
		email: '',
		password: ''
	})

	const handleSubmit = () => {

	}
	const handleChange = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		})
	}

	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name='login' title='Вход' btnName='Вход' onSubmit={handleSubmit}>
			<Input placeholder="Введите почту" description='Email' name='email' type='email' onChange={handleChange} value={data.email} />
			<Input placeholder='Введите пароль' description='Пароль' name='password' type='password' onChange={handleChange} value={data.password} />
		</PopupWithForm>
	)
}

export default LoginPopup;
