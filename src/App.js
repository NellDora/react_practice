import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['모두의 블로그','우리의 블로그']);
  let [글제목2, 글제목변경2] = useState('너만의 블로그');
  //ES6 destructuring 문법 => array,object에 있던 자료를 변수에 쉽게 담고 싶을 때
  // state 변수대신 쓰는 데이터 저장공간
  // statue에 데이터에 저장해놓는 이유 : 웹이 App처럼 동작하게 만들고 싶어서
  // state는 변경되면 HTML이 자동으로 재랜더링이 된다.
  let posts = '나만의 블로그';


  let styleTest ={color:'blue', fontSize:'30px'}
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={styleTest}>개발 Blog</div>
      </div>
      <div className='list'>
        <h3>{글제목[0]}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;
