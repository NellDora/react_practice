import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from "react-dom/client"; // react-dom/client에서 createRoot 호출
import * as RD from "react-dom/client";
//한가지 의문 기존에 ReactDOM  사용 되었는데 Clock 할때는 왜 안되는거지?
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library'; //라이브러리 jsx 호출
import Clock from './chapter_04/Clock';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>
// );
const root = RD.createRoot(document.getElementById('root'));
setInterval(() =>{
  root.render(
    <React.StrictMode>
      <Clock/>
    </React.StrictMode>,
    document.getElementById('root')
  );

},1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
