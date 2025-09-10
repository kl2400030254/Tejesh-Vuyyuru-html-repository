import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";
function Football() {
    const shoot = (a) => {
        alert(a);
    }
    return (
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    
    );
}
createRoot(document.getElementById('root')).render(
    <Football/>
);


export default Football;