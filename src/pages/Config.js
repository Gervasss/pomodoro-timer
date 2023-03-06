import { useContext } from "react";
import ReactSlider from "react-slider";
import BackButton from "../Buttons/BackButton";
import ConfigContext from "../ConfigContext";
import '../styles/slider.css'


function Config(){
  const configInfo =useContext(ConfigContext)
  return(
    <div style={{textAlign:'left'}}>
     <label>Trabalho:{configInfo.workMinutes}:00</label>
<ReactSlider
className={'slider'}
thumbClassName={'thumb'}
trackClassName={'track'}
value={configInfo.workMinutes}
onChange={newValue => configInfo.setWorkMinutes(newValue)}
min={1}
max={360}
/>
     <label> intervalo:{configInfo.breakMinutes}:00</label>
     <ReactSlider
className={'slider green'}
thumbClassName={'thumb'}
trackClassName={'track'}
value={configInfo.breakMinutes}
onChange={newValue => configInfo.setBreakMinutes(newValue)}
min={1}
max={360}
/>
<div style={{textAlign:'center',marginTop:'20px'}}>
  <BackButton onClick={() => configInfo.setshowConfig(false) }/>
</div>
    </div>
  )
}

export default Config;