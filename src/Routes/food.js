import { useEffect } from "react";

function Food(){
  useEffect(()=>{
    fetch("http://localhost:5000/api/food" , {
        method :"GET",
    })
    .then((response) => response.json())
    .then((data) =>{
        console.log(data)
    }) 
    .catch((error)=> console.log(error))
  }, [])
  return(
    <>
    <h2>This is Food Data</h2>
    </>
  )

}

export default Food;