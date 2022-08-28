import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function CatEditForm() {

  let { id } = useParams();
  let navigate = useNavigate();

  const [cat, setCat] = useState({
    name: "",
    parent_name: "",
    age:"",
    member_since:"",
    hometown:"",
    breed:"",
    image:""
  });

  const updateCat = (updatedCat) => {
    axios
      .put(`${API}/cats/${id}`, updatedCat)
      .then(
        () => {
          navigate(`/cats/${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setCat({ ...cat, [event.target.id]: event.target.value });
  };


  useEffect(() => {
    axios.get(`${API}/cats/${id}`).then(
      (response) => setCat(response.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCat(cat, id);
  };

  return (
    <div className="Edit">
<form onSubmit={handleSubmit}>
        <div className='form-group'>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={cat.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Cat"
          required
        />
        </div>
        <div className='form-group'>
        <label htmlFor="parent_name">Parent/Guardian Name:</label>
        <input
          id="parent_name"
          value={cat.parent_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Parent/Guardian"
          required
        />
         </div>
         <div className='form-group'>
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          value={cat.age}
          type="text"
          onChange={handleTextChange}
          placeholder="Age"
          required
        />
        </div>
        <div className='form-group'>
        <label htmlFor="member_since">Member Since:</label>
        <input
          id="member_since"
          value={cat.member_since}
          type="date"
          onChange={handleTextChange}
          required
        />
        </div>
        <div className='form-group'>
      <label htmlFor="hometown">Hometown:</label>
        <input
          id="hometown"
          value={cat.hometown}
          type="text"
          onChange={handleTextChange}
          placeholder='Hometown'
          required
        />
        </div>
        <div className='form-group'>
        <label htmlFor="breed">Breed:</label>
        <input
          id="breed"
          value={cat.breed}
          type="text"
          onChange={handleTextChange}
          placeholder='Breed'
          required
        />
        </div>
        <div className='form-group'>
       <label htmlFor="image">image:</label>
        <input
          id="image"
          value={cat.image}
          type="text"
          onChange={handleTextChange}
          placeholder='Image URL'
        />
        </div>
        <br />
        <input type="submit" />
      </form>
      <Link to={`/cats/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  )
}
