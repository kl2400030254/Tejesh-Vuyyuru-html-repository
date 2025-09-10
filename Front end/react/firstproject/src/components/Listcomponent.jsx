import "bootstrap/dist/css/bootstrap.min.css"
import "../App.css";

function ListComponent() {
    let cars = ["BMW","FORD","VOLVO","SOOB"];
    // cars = [];
    function handleClick(e){
        alert("Clicked "+e.target.inner);  /*.value for index and .inner for every name */
    }
    console.log(cars);
    if (cars.length === 0) {
        return <h2>No cars available</h2>;
    }


    return (
        <>
        <h2>List</h2>
        {/* <ul className="List_group">
            <li className="List_group-item" style={{ color : "red"}}> Item 1</li>
            <li> Item 2</li>
            <li> Item 3</li>
            <li className="mystyles">Item 2</li>
            <li className="list-group-item">Item 3</li></ul> */}
            <h2>Dynamic List</h2>
            {
                cars.length === 0 ? (<h2>No cars available</h2>

                ):
                (
                    <ul className="list_group">
                        {cars.map((car, index) => (
                            <li
                             key={index} className="list-group-item" onClick={() => alert(car + " " + index)}
                             onClick={handleClick()}
                             >
                                {car}
                            </li>
                        )
                       ) }
                    </ul>
                )
            }
        

        
        </>
    );
}

export default ListComponent;
