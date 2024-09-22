// import logo from './logo.svg';
import './App.css';
//import { useState } from 'react';
import Navbar from './components/Navbar';
//import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//  // Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')  //whether dark mode is enabled or not
  const [alert,setAlert]=useState(null)


  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null)
      },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark')
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled", "success")
    document.title='TextUtils- Dark Mode'
  //   setInterval(()=>{
  //       document.title='TextUtils is Amazing Mode'
  //   },2000);
  //   setInterval(()=>{
  //     document.title='Install TextUtils now'
  // },1500);
  }else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success")
    document.title='TextUtils- Light Mode'
    
  }
  }
  return (
    <>
       {/* <Navbar/> defaultProps  */}
      {/* <Router> */}
      
      {/* <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode}/> */}

      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
        <div className="container my-3">
      {/* <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>}/>
          </Routes> */}
          <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        </div>
      {/* </Router> */}
    </>
  );

}
export default App;
