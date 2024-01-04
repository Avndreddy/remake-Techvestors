import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "./Components/test";
import Who from "./Components/who";
import Nav from "./Components/navbarre";
import "./Components/Styles/navbar.css";
import Main from "./Components/main";
import First from "./Components/first";
import How from "./Components/how";
import Footer from "./Components/footer";
import Why from "./Components/why";
import FAQSection from "./Components/faq";
import AppBar from "./Components/appbar";
import What from "./Components/what";

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
        <Route path="/footer" element={<Footer />} />
        <Route path="/why" element={<Why />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/bar" element={<AppBar />} />
        <Route path="/what" element={<What />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
