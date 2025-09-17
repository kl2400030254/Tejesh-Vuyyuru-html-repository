import { useState } from "react";
function UseStateBooleanDemo() {
 const [isEligible,setIsEligible] = useState(true);
 return (
    <>
    <h1>UseStateBooleanDemo </h1>
    <button type="button" className="btn btn-primary mx-3"
    onClick={()=> setIsEligible(!isEligible)}>

        Update Eligibilty
    </button>

    {isEligible ? "you can vote" : "You cannot vote"}

    </>
 )

}
export default UseStateBooleanDemo;