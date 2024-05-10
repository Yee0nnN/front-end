import './App.css'
import Register from "./components/Register"
import Header from "./components/Header"


function App() {

  return (
    <div className="App"> 
    <Header />
    <Register />
    <text>* 최대 글자 수 6</text>
    </div>
  );
}

export default App;
