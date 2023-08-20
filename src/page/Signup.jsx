import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { VscAccount } from 'react-icons/vsc'
import { BiShow, BiSolidHide } from 'react-icons/bi'

const Signup = () => {

    const navigator = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
    })

    //handling that state for the password seen/unseen
    const handleShowPassword = () => {
        setShowPassword((showPassword)=> !showPassword);
    }

    //handling all the input of the input
    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    //handle submit of the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const {firstname, lastname, email, password} = data;
        if(firstname && lastname && email && password){
            alert("Successful")
            navigator("/login");
        }else{
            alert("Error")
        }
    }

  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex items-center flex-col p-4'>
            {/* <h1 className='text-center txt-2xl font-bold'>Sign Up</h1> */}
            <div className=''>
                <VscAccount/>
            </div>

            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>

                <label htmlFor="firstName">FirstName</label>
                <input 
                    type={"text"} 
                    id='firstname' 
                    name='firstname' 
                    value={data.firstname} 
                    onChange={handleOnChange} 
                    className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded outline-none'
                />

                <label htmlFor="firstName">LastName</label>
                <input 
                    type={"text"} 
                    id='lastname' 
                    name='lastname' 
                    value={data.lastname} 
                    onChange={handleOnChange} 
                    className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded outline-none'
                />
                
                <label htmlFor="email">Email</label>
                <input 
                    type={"text"} 
                    id='email' 
                    name='email' 
                    value={data.email} 
                    onChange={handleOnChange} 
                    className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded outline-none'
                />

                <label htmlFor="password">Password</label>
                <div className='flex bg-slate-200 rounded px-2 py-1 mt-1 mb-2'>
                    <input 
                        type={showPassword? "text" : "password"} 
                        id='password' 
                        name='password' 
                        value={data.password} 
                        onChange={handleOnChange} 
                        className='w-full bg-slate-200 border-none outline-none'
                    />
                    <span className='flex text-xl cursor' onClick={handleShowPassword}>{showPassword? <BiShow/> : <BiSolidHide/>}</span>
                </div>

                <button className='max-w-[150px] m-auto w-full bg-gray-400 hover:bg-gray-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4'>Sign Up</button>
            </form>
            <p className='text-left text-sm mt-2'>Already have account ? <Link to={'/login'} className='text-red-400 underline'>Login </Link></p>
        </div>
    </div>
  )
}

export default Signup;