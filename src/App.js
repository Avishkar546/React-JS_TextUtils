//  import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';

import Text from './components/Text';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light"); // Dark Mode useState
  const [btnText, setBtnText] = useState("Dark");  //Dark mode button text useState

  const change = () => {

    if (mode === "light") {
      setMode("dark");
      setBtnText("Dark");
      document.body.style.backgroundColor = '#121012e0'
      showAlert("Dark Mode Enabled !!","success");
    }
    else {
      setMode("light");
      setBtnText("Light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled !!","success");
    }
  };

    const[alert,setAlert] = useState(null);  // To handle the alert message
    const showAlert=(message,type) =>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(()=>{
        setAlert(null);
      },1500);
    };

  return (
    <>
      <Navbar title="Google" about="About" mode={mode} button={btnText} toggleFunction={change}  />

      <div className="container">
        <Alert alert={alert}/>
        <Text heading="Enter Text To Analyze" mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>

    </>
  );
}

export default App;