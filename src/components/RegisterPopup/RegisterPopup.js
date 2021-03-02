import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import './RegisterPopup.css';

function RegisterPopup({ isOpen, onClose, handleRegister, handlePopupSwitch }) {

	const [values, setValues] = React.useState({
		email: '',
		password: '',
		name: ''
	});
	const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

	const handleSubmit = (e) => {
		e.preventDefault();
		// let { email, password } = data;
		handleRegister(values)
	}

	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name='register' title='Регистрация' btnName='Регистрация' onSubmit={handleSubmit} switchButton='Войти' onSwitchButton={handlePopupSwitch} isValid={isValid}>
			<Input placeholder="Введите почту" description='Email' name='email' type='email' onChange={handleChange} value={values.email} error={errors.email}/>
			<Input placeholder='Введите пароль' description='Пароль' name='password' type='password' minLength={8} onChange={handleChange} value={values.password} error={errors.password}/>
			<Input placeholder='Введите своё имя' description='Имя' name='name' type='text' onChange={handleChange} value={values.name} />
		</PopupWithForm>
	)
}

export default RegisterPopup;
