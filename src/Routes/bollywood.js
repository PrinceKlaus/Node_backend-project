import React,{ useEffect} from "react";
function Bollywood(){
    useEffect(() =>{
        fetch("http://localhost:5000/api/bollywood",{
            method: "GET",
        })

        .then((response)=> response.json())
        .then((data)=>{
            console.log(data);
        })

        .catch((error)=> console.log(error));
    }, []);

    return(
        <>
        <h2>This is Bollywood Data</h2>
        </>
    )
}

export default Bollywood;