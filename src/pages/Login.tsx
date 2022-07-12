import React from 'react';
import '../SCSS/style.scss'
import {useState} from "react";
import Input from "../components/UI/Input/Input";
import {IUser} from "../types/types";
import { useForm, SubmitHandler } from "react-hook-form";
const Login = () => {
        const [data,setdata] = useState<boolean>(false)
        const [user,setuser] = useState<IUser>({name:'',email:'',id:Date.now(),password:''})
        function SendAllData():IUser|null{
               return user
        }
    return (
        <div className='registration__wrapper'>
            <form className='body'>
                    {(data)?<h2>Регистрация</h2>:<h2>Вход</h2>}
                    {data&&<div className='login'>
                            <Input value={user.name} type='text' placeholder='Введите имя' onChange={(e)=>setuser({...user,name:(e.target as HTMLInputElement).value})}/>
                    </div>}
                    <div className='login'>
                    <Input type='email' value={user.email} onChange={(e)=>setuser({...user,email:(e.target as HTMLInputElement).value})}  placeholder='Введите почту'/>
                    </div>
                    <div className='pass'>
                            <Input type='password' value={user.password} onChange={(e)=>setuser({...user,password:(e.target as HTMLInputElement).value})}  placeholder='Введите пароль'/>
                    </div>
                    {data&&<div className='pass'>
                            <Input type='password' placeholder='Повторите пароль'/>
                    </div>}
                    {(data)?<button type='submit' onClick={SendAllData} className='enter'>Регистрация</button>:<button className='enter'>Войти</button>}
                    {(!data) ? <div className='remind'>
                            <div className='forgotpass'>Забыли пароль?</div>
                            <div onClick={() => setdata(!data)} className='registration'>Регистрация</div>
                        </div> :
                        <div className='remind'>
                            <div onClick={() => setdata(!data)} className='registration'>Уже есть аккаунт?</div>
                        </div>
                    }
            </form>
        </div>
    );
};

export default Login;