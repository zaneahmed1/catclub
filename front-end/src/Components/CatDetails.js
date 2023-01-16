import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../Components/CatDetails.scss"
import NavBar from "../Components/NavBar"

export default function CatDetails() {
  
  const API = process.env.REACT_APP_API_URL;
  const [cat, setCat] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/cats/${id}`).then((response) => {
      setCat(response.data);
    });
  }, [id, navigate, API]);
  const deleteCat = () => {
    axios
      .delete(`${API}/cats/${id}`)
      .then(() => {
        navigate(`/cats`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteCat();
  };
  const formattedDate = new Date(cat.member_since).toDateString()

  return (
    <div className='details-wrapper'>
      <NavBar/>         
       <h1><b>Meet {cat.name}</b></h1>
    <div className='details'>
      <div className='details__info-left'>
      
        <h3><b>Parent/Guardian Name:</b> {cat.parent_name}</h3>
        <h3><b>Age:</b> {cat.age}</h3>
        <h3><b>Member Since:</b> {formattedDate}</h3>
        <h3><b>Breed:</b> {cat.breed}</h3>
        <h3><b>Hometown:</b> {cat.hometown}</h3>
       
      </div>
      <div className='details__info-right'> 
      <img src={cat.image} alt={cat.name}  width="300" 
     height="250"/>
 <div className='details__buttons'>
            {" "}
            <Link to={`/cats`}>
              <button>Back</button>
            </Link>
            <Link to={`/cats/${id}/edit`}>
              <button>Edit</button>
            </Link>
            <button onClick={handleDelete}>Delete</button>

        </div>
      </div>
      </div>
      </div>
  )
}
