import logo from './logo.svg';
import './App.css';


function App() {

  let posts = '나만의 블로그';
  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <h4>{posts}</h4>
      <h4>{함수()}</h4>

    </div>
  );
}

export default App;
