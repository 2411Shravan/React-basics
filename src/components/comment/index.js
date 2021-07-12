import React from 'react'

export default function Comment({username,caption}) {
    return (
        <div className="comment">
            <p><span style={{marginRight:"10px"}}><strong>{username}</strong></span>
                {caption}
            </p>
        </div>
    )
}
