import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Components/test";
import Who from "./Components/who";
import Nav from "./Components/navbarre";
import "./Components/Styles/navbar.css";
import Main from "./Components/main";
import First from "./Components/first";
import How from "./Components/how";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Nav />} />
        <Route path="/test" element={<Test />} />
        <Route path="/who" element={<Who />} />
        <Route path="/how" element={<How />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
