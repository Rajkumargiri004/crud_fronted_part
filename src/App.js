import Navbar from './component/Navbar'
import "./App.css";
import Home from './component/Home'
import Register from './component/Register'
import View from './component/View'
import Update from './component/Update'
import {Route, Routes} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
  <>
  <Navbar/>
  <ToastContainer/>
  <Routes>
    <Route path="/" element ={<Home/>} />
    <Route path="/Register" element ={<Register/>} />
    <Route path="/Update" element ={<Update/>} />
    <Route path="/View" element ={<View/>} />
  </Routes>
  </>
  )
}

export default App;
