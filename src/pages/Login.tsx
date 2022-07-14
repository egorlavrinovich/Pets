import React, {FC, FocusEventHandler, useEffect} from 'react';
import {useState} from "react";
import Input from "../components/UI/Input/Input";
import {IUser,IValidationform} from "../types/types";
import {UseChangeInput} from "../hooks/UseChangeInput";
import {UseCheckInput} from '../hooks/UseCheckInput'
const Login = React.memo(() => {
        const [loginorregistration,setloginorregistration] = useState<boolean>(false) // выбор нужной формы (логин или регистрация)
        const [disabled,setdisabled] = useState<boolean>(true) // делаем кнопку регистрации disabled or not
        const name = UseChangeInput() // контролируем инпут через хук
        const login = UseChangeInput() // контролируем инпут через хук
        const password = UseChangeInput() // контролируем инпут через хук
        const repeatpassword = UseChangeInput() // контролируем инпут через хук
        const nameFilter = UseCheckInput(name.str,'length',2) // делаем проверку на кол-во символов в имени
        const emailChecker = UseCheckInput(login.str,'email') // делаем проверку на email
        const passChecker = UseCheckInput(password.str,'pass') // делаем проверку на pass
        const matchPasses = UseCheckInput(password.str,repeatpassword.str) // делаем проверку на совпадение паролей

        useEffect(()=>{
                if(!nameFilter.error&&!emailChecker.error&&!passChecker.error&&!matchPasses.error){
                        setdisabled(false)
                }
        },[nameFilter.error,emailChecker.error,passChecker.error,matchPasses.error])

    return (
        <div className='registration__wrapper'>
            <form className='body'>
                    {(loginorregistration)?<h2>Регистрация</h2>:<h2>Вход</h2>}
                    {loginorregistration&&<div className='login'>
                            {name.blur&&nameFilter.error&&<div>Неверное имя</div>}
                            <Input onBlur={name.OnBlur} name='name' value={name.str} type='text' placeholder='Введите имя' onChange={name.ChangeState}/>
                    </div>}
                    <div className='login'>
                        {login.blur&&emailChecker.error&&<div>Неверная почта</div>}
                    <Input onBlur={login.OnBlur} name='email' type='email' value={login.str} onChange={login.ChangeState}  placeholder='Введите почту'/>
                    </div>
                    <div className='pass'>
                            {password.blur&&passChecker.error&&<div>Лёгкий пароль</div>}
                            <Input onBlur={password.OnBlur} name='password' type='password' value={password.str} onChange={password.ChangeState}  placeholder='Введите пароль'/>
                    </div>
                    {loginorregistration&&<div className='pass'>
                            {repeatpassword.blur&&password.blur&&matchPasses.error&&<div>Пароли не совпадают</div>}
                            <Input value={repeatpassword.str} onBlur={repeatpassword.OnBlur} onChange={repeatpassword.ChangeState} name='repeatpassword' type='password' placeholder='Повторите пароль'/>
                    </div>}
                    {(loginorregistration)?<button type='submit' disabled={disabled} className='enter'>Регистрация</button>:<button className='enter'>Войти</button>}
                    {(!loginorregistration) ? <div className='remind'>
                            <div className='forgotpass'>Забыли пароль?</div>
                            <div onClick={() => setloginorregistration(!loginorregistration)} className='registration'>Регистрация</div>
                        </div> :
                        <div className='remind'>
                            <div onClick={() => setloginorregistration(!loginorregistration)} className='registration'>Уже есть аккаунт?</div>
                        </div>
                    }
            </form>
        </div>
    );
});

export default Login;