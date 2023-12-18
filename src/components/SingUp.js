import React from 'react'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import imgBG from './singImg.png'
import userIcon from './icons/user.svg'
import mailIcon from './icons/mail.svg'
import lockIcon from './icons/lock.svg'
import './SingUp.css'

const SingUp = () => {
  return (
    <div className='singup'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8 p-0'>
                    <div className='singup__content'>
                        <h1 className='singup__Hello mb-4 pt-5'>Hello Star!</h1>
                        <form className='form'>
                            <div className='feild d-flex'>
                                <div className='user-icon'>
                                    <img src={userIcon}/>
                                </div>
                                <input type='text' name="fname" placeholder='Name' required title="Valid phone number (Without + marks)" />
                                <div className='password-icon'>
                                </div>
                            </div>
                            <div className='feild d-flex'>
                                <div className='user-icon'>
                                    <img src={mailIcon}/>
                                </div>
                                <input type='email' name="email" placeholder='Email' required title="Valid phone number (Without + marks)" />
                                <div className='password-icon'>
                                </div>
                            </div>
                            <div className='feild d-flex'>
                                <div className='user-icon'>
                                    <img src={lockIcon}/>
                                </div>
                                <input type='password' name="password" placeholder='Password' required title="Valid phone number (Without + marks)" />
                                <div className='password-icon'>
                                    <FaEyeSlash/>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <div className='col-4 p-0'>
                    <div className='singup__bg '>
                        <img src={imgBG}/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default SingUp