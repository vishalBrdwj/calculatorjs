import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import "./index.css";

function Main() {
  const [inputvalue, setinputvalue] = useState("");

//define diaplay function for input display
const display = (val)=>{
  setinputvalue(inputvalue + val)
}

//clear function
const clear = ()=>{
  setinputvalue("")
}

//evaluate or  = define
function evaluate(){
  let Answer = eval(inputvalue)
  setinputvalue(Answer)
}
  return (
    <form class="calculator border rounded text-center" name="calc">
     CASIO
      <input type="text" class="value" value={inputvalue} />
      <span class="num clear" onClick={clear}>c</span>
      <span onClick={()=>display("/")} >/</span>
      <span onClick={()=>display("*")} >*</span>
      <span onClick={()=>display("7")} >7</span>
      <span onClick={()=>display("8")} >8</span>
      <span onClick={()=>display("9")} >9</span>
      <span onClick={()=>display("-")} >-</span>
      <span onClick={()=>display("4")} >4</span>
      <span onClick={()=>display("5")} >5</span>
      <span onClick={()=>display("6")} >6</span>
      <span onClick={()=>display("+")} > + </span>
      <span onClick={()=>display("1")} >1</span>
      <span onClick={()=>display("2")} >2</span>
      <span onClick={()=>display("3")} >3</span>
      <span onClick={()=>display("0")} >0</span>
      <span onClick={()=>display("00")} >00</span>
      <span onClick={()=>display(".")} >.</span>
      <span class="num equal" onClick={evaluate} >= </span>
    </form>
  );
}

export default Main;