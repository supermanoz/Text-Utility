import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import About from './components/About';
import Props from './components/Props';
import TextArea from './components/TextArea';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export const ACTION={
  INCREMENT:'increment',
  DECREMENT:'decrement',
  RESET:'reset'
}

export default function App() {
  const [count,setCount]=useState(5);
  const [style,setStyle]=useState({
    bg:"light",
    text:"dark",
    alert:"success"
  })
  const [alert,setAlert]= useState(null);

  let handleClick=(action)=>{
    if(action===ACTION.INCREMENT)
      setCount(prevCount=>prevCount+1)

    if(action===ACTION.DECREMENT){
      if(count>5)
        setCount(prevCount=>prevCount-1)
    }

    if(action===ACTION.RESET)
      setCount(5)
  }

  let handleMode=()=>{
    if(style.bg==="light"){
      setStyle({
        bg:"dark",
        text:"light"
      });
      document.body.style.backgroundColor="#12002d";
      showAlert("Switched to Dark Mode","light");
    }
    else{
      setStyle({
        bg:"light",
        text:"dark"
      });
      document.body.style.backgroundColor="white";
      showAlert("Switched to Light Mode","dark");
    }
  }

  let showAlert =(text,type)=>{
    setAlert({
      text:text,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500)
  }

  return (
    <div style={{backgroundColor:`${style.back}`}}>
      <Router>
        <Navbar onHandleMode={handleMode} mode={style}/>
        <Alert mode={alert}/>
        <Routes>
          <Route path="/" element={
          <>
            <div className="container my-2">
              <label className={`text-${style.text}`}>Box Size</label>
              <Props name="-" onHandleClick={handleClick} action="decrement" mode={style}/>
              <span className={`text-${style.text}`}>{count}</span>
              <Props name="+" onHandleClick={handleClick} action="increment" mode={style}/>
              <Props name="Reset" onHandleClick={handleClick} action="reset" mode={style}/>
            </div>
            <div className="container my-3">
              <TextArea mode={style} size={count}/>
            </div>
          </>
          }>
          </Route>
          <Route exact path="/about" element={
            <>
              <div className="container my-3">
                <About />
              </div>
            </>
          }>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
