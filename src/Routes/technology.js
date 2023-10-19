import { useEffect } from "react";

function Technology(){
useEffect(()=>{
    fetch("http://localhost:5000/api/technology", {
        method : "GET",
    })
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data)
    })
    .catch((error) => console.log(error));

}, []);

return(
    <>
    <h2>This is Technology Data</h2>
    </>
)
}

export default Technology;