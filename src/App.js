import React, { useState } from "react"
import ConfigContext from "./ConfigContext";
import Config from "./pages/Config";
import './styles/App.css'
import Timer from "./Timer";





function App() {

const [showConfig,setshowConfig]=useState(false)
const [workMinutes,setWorkMinutes]=useState(45)
const [breakMinutes,setBreakMinutes]=useState(15)
  return (
    <main>
      <ConfigContext.Provider value={{
       showConfig,
       setshowConfig,
       workMinutes,
       breakMinutes,
       setBreakMinutes,
       setWorkMinutes, 
      }}>
      {showConfig? <Config/> : <Timer/>}
      </ConfigContext.Provider>
    </main>
  );
}

export default App;
