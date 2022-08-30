import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


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
    <div className='details'>
        <h3><b>{cat.name}</b></h3>
        <h6><b>Parent/Guardian Name:</b> {cat.parent_name}</h6>
        <h6><b>Age:</b> {cat.age}</h6>
        <h6><b>Member Since:</b> {formattedDate}</h6>
        <h6><b>Breed:</b> {cat.breed}</h6>
        <h6><b>Hometown:</b> {cat.hometown}</h6>
        <img src={cat.image} alt={cat.name}  width="220" 
     height="220"/>
        <div>
          <div>
            {" "}
            <Link to={`/cats`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/cats/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </div>
  )
}
