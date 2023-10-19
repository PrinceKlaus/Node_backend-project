import { useEffect } from "react";

function Fitness(){
     useEffect(()=>{
        fetch("http://localhost:5000/api/fitness" ,{
            method : "GET",
        })
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
        })
        .catch((error) => console.log(error))
     },[])

     return(
        <>
        <h2>This is Fitness Data</h2>
        </>
     )

}

export default Fitness;