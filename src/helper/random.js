import React from 'react';


export default function Makeid(length){
    var result="";
    var characteristic="ABCDEFGHIJKLMNOPQRSTUVWQYXabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength= characteristic.length;
    for(var i=0;i<length;i++) {
        result+= characteristic.charAt(Math.floor
            
            (Math.random() * charactersLength));
    }

    return result;
    
    
    
}