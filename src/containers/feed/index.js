import React,{useContext,useState,useEffect} from 'react'
import { UserContext } from '../../contexts/user'
import {Post} from '..'
import './style.css'
import { db } from '../../firebase'


export default function Feed() {
    const [post, setpost] = useState([])

    useEffect(() => {
        db.collection('posts').onSnapshot((snapshot)=>{
            setpost(snapshot.docs.map((document)=>({
                id:document.id,post:document.data()
            })))
        })
    },[])

    const[user,setuser] = useContext(UserContext).user;
    return (
        <div className="feed">
            

             {

                 post.map(({id,post}) => {
                     return <Post key={id}
                     id={id}
                     photoURL={post.photoURL}
                     photoUrl={post.photoUrl}
                     username={post.username}
                     caption={post.caption}/>
                 })
                }
        </div>
    )
}
