import "./App.css";
import Start from "./components/Start";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Redirection from "./components/Redirection";
import LoginSuccess from "./components/LoginSuccess";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />}></Route>
          <Route
            path="/login/oauth2/code/kakao" //redirect_url
            element={<Redirection />}
          />
          <Route path="/loginSuccess" element={<LoginSuccess />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
