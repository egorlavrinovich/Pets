import React from 'react';
import '../SCSS/style.scss'
const Login = () => {
    return (
        <div className='registration__wrapper'>
            <div className='body'>
                    <h2>Вход</h2>
                    <div className='login'>
                    <input type='email' placeholder='Введите логин'/>
                    </div>
                    <div className='pass'>
                    <input type='password' placeholder='Введите пароль'/>
                    </div>
                    <div className='enter'>Войти</div>
                    <div className='remind'>
                            <div className='forgotpass'>Забыли пароль?</div>
                            <div className='registration'>Регистрация</div>
                    </div>
            </div>
        </div>
    );
};

export default Login;