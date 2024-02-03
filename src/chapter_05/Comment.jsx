import React from "react";
import './Comment.css';



function Comment(props){
    return (
        <div className="wrapper">
            <div className="imageContainer">
                
            </div>

            <div className="contentContainer">
                <span className="nameText">{props.title}</span>
                <span className="commentText">{props.content}</span>
            </div>
        </div>
        
    );
}



export default Comment;