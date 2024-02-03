import React from "react";



function ProfileDetail(props){


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

export default ProfileDetail;