import React,{useContext} from 'react'
import { SignInBtn} from '../../components'
import { UserContext } from '../../contexts/user'
import './style.css'

export default function Navbar() {
    const [user, setuser] = useContext(UserContext).user;
    return (
        
        <div className="navbar">
            {user ? <h2>React Social</h2>:<p>React Social</p>}
            {user ? <img className="user-img" src={user.photoURL}/>:<SignInBtn/>}
              
            
        </div>
        
    );
}
