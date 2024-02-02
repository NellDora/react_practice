import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import CommentList from './chapter_05/CommentList';


function App() {

  let [글제목, 글제목변경] = useState(['모두의 블로그','우리의 블로그','너만의 블로그']);
  let [글제목2, 글제목변경2] = useState('너만의 블로그');
  //ES6 destructuring 문법 => array,object에 있던 자료를 변수에 쉽게 담고 싶을 때
  // state 변수대신 쓰는 데이터 저장공간
  // statue에 데이터에 저장해놓는 이유 : 웹이 App처럼 동작하게 만들고 싶어서
  // state는 변경되면 HTML이 자동으로 재랜더링이 된다.
  let posts = '나만의 블로그';

  let [따봉,따봉변경] =useState(0);
  

  let styleTest ={color:'blue', fontSize:'30px'}
  function 함수(){
    return 100
  }

  function 제목변경(){
    var newArray = [...글제목];
    newArray[0] ="너와나의 블로그";
    글제목변경(newArray);
  }
  
  function 글자순_정렬(){
    var newArray =[...글제목];
    newArray.sort();
    글제목변경(newArray);
  }
  function 원상복귀(){
    var newArray =['모두의 블로그','우리의 블로그','너만의 블로그'];
    글제목변경(newArray);
  }



  return (
    <div className="App">
      <div className="black-nav">
        <div style={styleTest}>개발 Blog</div>
      </div>
      <button onClick={제목변경}>버튼</button>
      <button onClick={글자순_정렬}>글자순 정렬</button>
      <button onClick={원상복귀}>원상복귀</button>
      <div className='list'>
        <h3>{글제목[0]} <span onClick={()=>{따봉변경(따봉+1)}}>♥</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr/>
      </div>
      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
      <CommentList/>
      
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

function Component(props){
  return(
    <div className='comment'>
      <UserInfo user={props.author} />
      <div className='comment-text'>
        {props.text}
      </div>
    </div>
  );
}

function Avatar(props){
  return (
    <img className="avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props){
  return(
    <div className='user-info'>
      <Avatar user={props.user}/>
      <div className='user-info-name'>
        {props.user.name}
      </div>
    </div>
  );
}

/* 터미널에 뜨는warning -> eslint가 잡아주는 문법체크사항
*/
export default App;
