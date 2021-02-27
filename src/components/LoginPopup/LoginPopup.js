import React, { useCallback } from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import './LoginPopup.css';

function LoginPopup({ isOpen, onClose, handleLogin, handlePopupSwitch }) {

	const [values, setValues] = React.useState({
		email: '',
		password: ''
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

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

	// const [data, setData] = useState({
	// 	email: '',
	// 	password: ''
	// })

	const handleSubmit = (e) => {
		e.preventDefault();
		// let { email, password } = data;
		handleLogin(values)
	}

	return (
		<PopupWithForm isOpen={isOpen} onClose={onClose} name='login' title='Вход' btnName='Вход' onSubmit={handleSubmit} switchButton='Зарегистрироваться' onSwitchButton={handlePopupSwitch} isValid={isValid}>
			<Input placeholder="Введите почту" description='Email' name='email' type='email' onChange={handleChange} value={values.email} error={errors.email}/>
			<Input placeholder='Введите пароль' description='Пароль' name='password' type='password' minLength={8} onChange={handleChange} value={values.password} error={errors.password}/>
		</PopupWithForm>
	)
}

export default LoginPopup;
