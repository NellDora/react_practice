import React from "react";
import Comment from "./Comment";
import Comment2 from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment title="붉은 노을" content="이문세의 노래중 하나입니다."/>
            <Comment title="검은 노을" content="이문세의 노래가 아닙니다."/>
            <Comment title="노란 노을" content="이문세의 노래중 아니에용."/>
            <Comment title="파란 노을" content="이문세의 노래중 아닐껍니다"/>
        </div>
    );
}

export default CommentList;