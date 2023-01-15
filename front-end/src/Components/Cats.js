import axios from "axios";
import { useState, useEffect } from "react";
import Cat from "./Cat";
import "../Components/Cats.scss"

const API = process.env.REACT_APP_API_URL;

export default function Cats() {

  const [cats, setCats] = useState([])

  useEffect(() => {
      axios
        .get(`${API}/cats`)
        .then((response) => setCats(response.data))
        .catch((e) => console.error("catch", e));
    }, []);

  return (
    <div className="cats">
<div className="cats__grid">
  <div className="cats__griditem">
       {cats.map((cat) => {
         return <Cat key={cat.id} cat={cat}/>
      })}
  </div>


</div>
   
    </div>
  )
}
