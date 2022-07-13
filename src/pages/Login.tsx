import React, {FC, FocusEventHandler, useEffect} from 'react';
import '../SCSS/style.scss'
import {useState} from "react";
import Input from "../components/UI/Input/Input";
import {IUser,IValidationform} from "../types/types";
const Login = React.memo(() => {
        const [data,setdata] = useState<boolean>(false)
        const [user,setuser] = useState<IUser>({name:'',email:'',id:Date.now(),password:''})
        const [repeatpassword,setrepeatpassword] = useState<string>('')
        const [reset,setrest] = useState<boolean>(true)
        function SendAllData():IUser|null{
               return user
        }
        const [validation,setvalidation] = useState<IValidationform>({name:false,email:false,password:false,repeatpassword:false})
        const [error,seterror] = useState<IValidationform>({name:true,email:false,password:false,repeatpassword:false})
        const example = (e: React.FocusEvent<HTMLInputElement>) =>{
            switch (e.target.name){
                case 'name':
                    setvalidation({...validation,name:true})
                    break
                case 'email':
                    setvalidation({...validation,email:true})
                    break
                case 'password':
                    setvalidation({...validation,password:true})
                    break
                case 'repeatpassword':
                    setvalidation({...validation,repeatpassword:true})
                    break
            }
        }
        useEffect(()=>{
            ((Object.values(error).filter(item=>!item).length)===4)?setrest(false):setrest(true)
        },[error])
        useEffect(()=>{
            if(validation.name){
                (user.name.length>10||user.name.length<=2)?seterror({...error,name:true}):seterror({...error,name:false})
            }
            if(validation.email){
                const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
                (!re.test(String(user.email).toLowerCase()))?seterror({...error,email:true}):seterror({...error,email:false})
            }
            if(validation.password){
                const beginWithoutDigit = /[A-Z]/g;
                ( !beginWithoutDigit.test(user.password)&&user.password.length<6)?seterror({...error,password:true}):seterror({...error,password:false})
            }
            if(validation.repeatpassword){
                (user.password!==repeatpassword)?seterror({...error,repeatpassword:true}):seterror({...error,repeatpassword:false})
            }
        },[validation])

    return (
        <div className='registration__wrapper'>
            <form className='body'>
                    {(data)?<h2>Регистрация</h2>:<h2>Вход</h2>}
                    {data&&<div className='login'>
                            {validation.name&&error.name&&<div>Неверное имя</div>}
                            <Input onBlur={example} name='name' value={user.name} type='text' placeholder='Введите имя' onChange={(e)=>setuser({...user,name:(e.target as HTMLInputElement).value})}/>
                    </div>}
                    <div className='login'>
                        {validation.email&&error.email&&<div>Неверная почта</div>}
                    <Input onBlur={example} name='email' type='email' value={user.email} onChange={(e)=>setuser({...user,email:(e.target as HTMLInputElement).value})}  placeholder='Введите почту'/>
                    </div>
                    <div className='pass'>
                            {validation.password&&error.password&&<div>Слишком простой пароль</div>}
                            <Input onBlur={example} name='password' type='password' value={user.password} onChange={(e)=>setuser({...user,password:(e.target as HTMLInputElement).value})}  placeholder='Введите пароль'/>
                    </div>
                    {data&&<div className='pass'>
                            {validation.repeatpassword&&error.repeatpassword&&<div>Пароли не совпадают</div>}
                            <Input onBlur={example} onChange={(e)=>setrepeatpassword((e.target as HTMLInputElement).value)} name='repeatpassword' type='password' placeholder='Повторите пароль'/>
                    </div>}
                    {(data)?<button type='submit' onClick={SendAllData} disabled={reset} className='enter'>Регистрация</button>:<button className='enter'>Войти</button>}
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
});

export default Login;