import "bootstrap/dist/css/bootstrap.css";
import './App.css'
//import PropsDemo from './components/PropsDemo';
//import UseStateDemo from "./components/UseStateDemo";
//import UseStateBooleanDemo from "./components/UseStateBooleanDemo";
import { useState } from "react";
//import UseStateArrayDemo from "./components/UseStateArrayDemo";
//import UseStateArrayDemo from "./components/UseStateArrayDemo";
//import UseStateObjectDemo from "./components/UseStateObjectDemo";
//import UseEfeectDemo from "./components/UseEfeectDemo";
//import UseStateObjectDemos from "./components/UseStateObjectDemos";
//import UseStateObjectDemos from "./components/UseStateObjectDemos";
import UseStateObjectDemos from "./components/UseStateObjectDemos";


function App() {
  return (
    //<PropsDemo name="John" age={18}/>
    //console.log(useState(123));
    //console.log(val);

   // setVal(456);
    //const [val,setVal] useState(123);
    //console.log{"After update:" ,val};
    <>
   {/* <UseEfeectDemo></UseEfeectDemo> */}

    {/*<UseStateArrayDemo></UseStateArrayDemo> */}

    {/*<UseStateBooleanDemo/> */}
    {/*<UseStateDemo/>*/}
    {/*<UseStateObjectDemo></UseStateObjectDemo> */}
    { /*<UseStateObjectDemos></UseStateObjectDemos> */}
    <UseStateObjectDemos></UseStateObjectDemos>
    </>
       

    
  );

  }

export default App;
