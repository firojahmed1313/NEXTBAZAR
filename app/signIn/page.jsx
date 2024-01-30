"use client"

import React, { useState } from 'react'
import Navber from '../component/header/Navber'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GppGoodIcon from '@mui/icons-material/GppGood';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isVisiable, setIsVisiable] = useState(false);
    const OnSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
    }
    return (
        <>
            <Navber />
            <div className="w-[90%] m-[5%] border border-red-500 ">
                <form onSubmit={OnSubmit} className='flex flex-col justify-center align-middle border border-black w-max h-max m-auto p-20 shadow-md '>
                    <h2 className="underline p-10 text-center font-bold text-[30px] font-serif pb-3  ">Sign In</h2>
                    <div className='m-10 -10 flex justify-center align-middle border border-black rounded-[20px] w-[300px] mx-auto '>
                        <AlternateEmailIcon fontSize="large" />
                        <input placeholder='Enter Email' type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} className="outline-none p-15 mx-5"/>
                    </div>
                    <div className='m-10 flex justify-center align-middle border border-black rounded-[20px] w-[300px] mx-auto'>
                        <GppGoodIcon fontSize="large"/>
                        <input placeholder='Enter Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} type={(isVisiable) ? "text" : "password"} className="outline-none p-15"/>
                        <div onClick={() => setIsVisiable(!isVisiable)}>
                            {(isVisiable) ? <VisibilityOffIcon fontSize="large" /> : <VisibilityIcon fontSize="large" />}
                        </div>
                    </div>
                    <input type="submit" value="Login" className='x-3 py-2 w-[70px] mx-auto inline-block cursor-pointer text-center text-black  bg-white shadow-sm border border-red-200 rounded-md hover:bg-red-100 hover:border-gray-300 ' />
                </form>
            </div>
        </>
    )
}

export default SignIn