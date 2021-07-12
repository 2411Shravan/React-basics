import React,{useContext} from 'react'
import {SignInBtn} from '../../components'
import './style.css'
import { Navbar,Createpost } from '../../containers'
import { UserContext } from '../../contexts/user'
import Feed from '../../containers/feed';



export default function Home() {

    const [user, setuser] = useContext(UserContext).user;
    return (
        <div className="home">
            <Navbar/>
            
            <Createpost/>
            <Feed/>
           
        </div>
    )
}
