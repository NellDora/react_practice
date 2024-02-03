import React from "react";
import PageCounter from "../function/pageCount";
import ProfileDetail from "./ProfileDetail";

const MAX_PAGE = 4;

function Profile(){

    const [endPage, setEndPage] = useState(false);
    const [pageCount, increaseCount, decreaseCount] = usePageCounter(1);
    
    useEffect(() => {
        setEndPage(pageCount>=4);
        console.log(`pageCount :  $(endPage)`);
    });

    useEffect(() => {
        if(pageCount<MAX_PAGE){
            setEndPage(false);
        }
    });

    return(
        <div className="wrapper">
        <div className="imageContainer">
            
        </div>
        <button onClick={increaseCount} disabled={endPage}>다음페이지</button>
        <button onClick={decreaseCount}>이전페이지</button>
        <div>
        {
          (function(){
            if(pageCount===1) return <ProfileDetail title="1페이지" content="내용은 이렇습니다."/>
            if(pageCount===2) return <ProfileDetail title="2페이지" content="내용은 이렇습니다."/>
            if(pageCount===3) return <ProfileDetail title="3페이지" content="내용은 이렇습니다."/>
            if(pageCount===4) return <ProfileDetail title="4페이지" content="내용은 이렇습니다."/>
          })()
        }
      </div>
    </div>
    );
}

export default Profile;