import { useEffect, useState } from "react";
const User =(props)=>{
    const[count,setCount]=useState(0);

    useEffect(()=>{
        const timer= setInterval(()=>{
            console.log("Namaste React");
        },1000);
        
        return()=>{
            clearInterval(timer);
        }


    },[]);

    return(
        <div className="user-card">
            <h1 className="heading">Name:{props.name}</h1>
            <h1 className="location">Location:{location}</h1>
            <h1 className="contact">Contact:vamsikrishnasanapala@gmail.com</h1>
        </div>
    );
}
export default User;