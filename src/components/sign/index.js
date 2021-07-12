import React from 'react'
import './style.css'
import { useState,useContext} from 'react'
import {signInWithGoogle} from '../../services/auth'
import { UserContext } from '../../contexts/user'


export default function Signin() {
   const[user,setUser] = useContext(UserContext).user;

   async function handleLogin(){
        let userlogin =await signInWithGoogle();
        if(userlogin){
            setUser(userlogin);
            
        }
        console.log(userlogin);
    }


    return (
        <div className="signinbtn">
            <p onClick={handleLogin}>Sign in with Google</p>
        </div>
    )
}
