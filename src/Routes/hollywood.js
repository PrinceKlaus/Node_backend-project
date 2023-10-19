import { useEffect } from "react";

function Hollywood(){
    useEffect(()=>{
        fetch("http://localhost:5000/api/hollywood", {
            method : "GET",
        })
        .then((response) =>response.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=> console.log(error))
    },[])

    return(
        <>
        <h2>This is hollywood Data</h2>
        </>
    )
}

export default Hollywood;