import React from 'react'
import CatNewForm from "../Components/CatNewForm"
import { UserContext } from "../Providers/UserProvider";
import { useNavigate} from "react-router-dom";
import { useContext, useEffect } from "react";

export default function New() {
  
  const navigate = useNavigate();
  const user = useContext(UserContext);
  useEffect(() => { 
    if(!user) {
        alert("not logged in - redirecting")
        navigate("/");
      }
    }, [user, navigate]);


  return (
    <div>
      <CatNewForm/>
    </div>
  )
}
