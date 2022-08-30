import React from 'react'
import CatEditForm from "../Components/CatEditForm"
import { UserContext } from "../Providers/UserProvider";
import { useNavigate} from "react-router-dom";
import { useContext, useEffect } from "react";

export default function Edit() {

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
      
      <CatEditForm/>
    </div>
  )
}
