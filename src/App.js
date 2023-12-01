
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import MenuAppBar from './Components/navbar';
// import First from './Components/first';
// import Home from './Components/home';
import Test from './Components/test';
import Test2 from './Components/test2';
import Titles from './Components/Titles';


function App() {
  return (
    <BrowserRouter>
    <Routes>   
       
    {/* <Route path='/first' element={<First/>}/>    
    <Route path='/home' element={<Home/>}/>  */}
    <Route path='/' element={<MenuAppBar/>}/>
    <Route path='/test' element={<Test/>}/>
    <Route path='/test2' element={<Test2/>}/>
    <Route path='/titles' element={<Titles/>}/>

    </Routes>

  </BrowserRouter>
  );
}

export default App;
