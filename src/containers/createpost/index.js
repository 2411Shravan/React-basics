import React,{useState,useContext} from 'react'
import "./style.css"
import { SignInBtn } from '../../components'
import { UserContext } from '../../contexts/user'
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import Makeid from '../../helper/random';
import { storage,db } from '../../firebase';
import firebase from "firebase"

export default function Createpost() {
    const[user,setUser]=useContext(UserContext).user;
    const [caption, setcaption] = useState('');
    const[image,setimage] = useState(null);


    const [Progress, setProgress] = useState(0);

    const handlechange=(e)=>{
        setcaption(e.target.value);
        };
        console.log(caption);

    const handlechangeImage=(e)=>{
        if(e.target.files[0]){
            setimage(e.target.files[0]);


            var selectImage = URL.createObjectURL(e.target.files[0]);
            var imagePriview = document.getElementById("image-preview");

            imagePriview.src = selectImage;
            imagePriview.style.display="block";
    }
    }

    const handleupload=()=>{
        if(image){
            var imageName=Makeid(10);

            const uploadTask=storage.ref(`images/${imageName}.jpg`)
            .put(image);

            uploadTask.on("state_changed",(snapshot)=>{
                    
                
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)*100);
                setProgress(progress);

            },(error) => {
                console.log(error);
            },()=>{
                storage.ref("images").child(`${imageName}.jpg`)
                .getDownloadURL()
                .then((imageUrl)=>{
                    db.collection("posts").add({
                        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                        caption:caption,
                        photoUrl:imageUrl,
                        username:user.email.replace("@gmail.com",""),
                        photoURL:user.photoURL

                    })
                }) ;
                
            });


        }
                setcaption("");
                setProgress(0);
                setimage(null);

    };


    return (
        <div className="createpost">
            {
                user? (
                <div className="loggedIn">
                    <p>Create Post</p>
                    <div className="loggedInCenter">
                        <textarea className="createpostTextarea"
                            rows="3"
                            value={caption}
                            onChange={handlechange}
                            placeholder="Enter caption here."
                        >

                        </textarea>
                        <div className="createpostImagePreview">
                            <img id="image-preview" alt=""/>
                        </div>

                    </div>
                    <div className="have-both">
                    <div className="createPostImage">
                        <label htmlFor="fileInput">
                        <AddAPhotoIcon style={{cursor:"pointer",fontSize:"25px"}}/>
                        </label>
                        <input id="fileInput" type="file" accept="image/*" onChange={handlechangeImage}/>
                    </div>
                    <button className="createPostUpload" onClick={handleupload}
                    style={{color:caption? "black" : "lightgrey"}}
                    >
                        {`Upload ${Progress!=0 ? Progress : ""}`}
                    </button>
                    </div>
                </div>
                ):
                (<div className="createpost"><SignInBtn/>
                <p style={{marginLeft: "12px"}}>to post and comment</p></div>)
            
            }
            
        </div>
    )
}
