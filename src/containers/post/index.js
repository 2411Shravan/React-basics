import React from 'react'
import {useState,useContext} from 'react';
import { UserContext } from '../../contexts/user';
import './style.css'
import { Comment } from '../../components';
import { storage,db } from '../../firebase';


export default function Post({caption,id,photoURL,photoUrl,username,comments}) {
    const [user, setuser] = useContext(UserContext).user


    const deletepost=()=>{
        var imageRef= storage.refFromURL(photoUrl);
        imageRef.delete().then(function(){
            console.log("Deleted");
        }).catch(function(error){
            console.log(`Error is ${error}`);
        });


        //delete post info from firebase firestore

        db.collection('posts').doc(id).delete().then(function(){
            console.log("Deletion of post was successful");
        }).catch(function(error){
            console.log(`An error was occured ${error}`);
        })
   }
    return (
        <div className="post">
            
              <div className="post-header">
              <div className="post-header-left">
              <img src={photoURL} alt="image" className="post-profile-image"/>  
              <p style={{marginLeft:"15px"}}>{username}</p>
              </div>
              <button className="post-delete" onClick={deletepost}>Delete</button>
            </div> 

            <div className="post_center">
                <img className="post-img" src={photoUrl} alt="image"/>
            </div> 
            <div>
                <p><span style={{marginRight:"10px"}}><strong>{username}</strong></span>
                {caption}
                </p>
            </div> 


            { comments ? comments.map((comment) => {
                return <Comment caption={comment.comment} username={comment.username}/>
            }): <></>
                }         
        </div>
    )
}
