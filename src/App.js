//  import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import Text from './components/Text';

function App() {
  const[mode, setMode] = useState("light");

const[btnText, setBtnText] = useState("Dark");

const change = () =>{
   
    if(mode === "light"){
      setMode("dark");
      setBtnText("Dark");
      document.body.style.backgroundColor = '#121012e0'
    }
    else{
      setMode("light");
      setBtnText("Light");
      document.body.style.backgroundColor = 'white'
    }
};
  return (
    <>
      <Navbar title="Google" about="About" mode={mode} button = {btnText} toggleFunction = {change}/>
      <div className="container">
        <Text heading="Enter Text To Analyze" mode={mode}/>
        {/* <About /> */}
      </div>
      
    </>
  );
}

export default App;