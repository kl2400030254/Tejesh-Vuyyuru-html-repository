function PropsDemo(Props) {
    console.log(props);
    return(
        <>
        <h1>properties demo in react</h1>
       Name: {Props.name} <br></br>
       Age:  {Props.age}
        </>
    )
}
export default PropsDemo;