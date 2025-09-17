import { useState } from "react";
function UseStateDemo() {
    const [count, setCount] = useState(0);
    const incr = () => {
        setCount(count + 1);
    };
    const dec =() => {
        setCount(count - 1);
    }
    return(
        <>
      <h1>  Use state Demo</h1>
      <button type="button" className="btn btn-primary" onClick={incr}>Increment</button>
      
    
      Count : {count}
      <button type="button" className="btn btn-danger" onClick={dec}>Decrement</button>
    
      </>
    )
}
export default UseStateDemo;