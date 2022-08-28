import React from 'react'
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function CatNewForm() {

  let navigate = useNavigate();

  const addCat = (newCat) => {
    axios
      .post(`${API}/cats`, newCat)
      .then(
        () => {
          navigate(`/cats`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [cat, setCat] = useState({
    name: "",
    parent_name: "",
    age:"",
    member_since:"",
    hometown:"",
    breed:"",
    image:""
  });

  const handleTextChange = (event) => {
    setCat({ ...cat, [event.target.id]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addCat(cat);
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={cat.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Cat"
          required
        />
        <label htmlFor="parent_name">Parent/Guardian Name:</label>
        <input
          id="parent_name"
          value={cat.parent_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Parent/Guardian"
          required
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          value={cat.age}
          type="text"
          onChange={handleTextChange}
          placeholder="Age"
          required
        />
        <label htmlFor="member_since">Member Since:</label>
        <input
          id="member_since"
          value={cat.member_since}
          type="date"
          onChange={handleTextChange}
          required
        />
      <label htmlFor="hometown">Hometown:</label>
        <input
          id="hometown"
          value={cat.hometown}
          type="text"
          onChange={handleTextChange}
          placeholder='Hometown'
          required
        />
        <label htmlFor="breed">Breed:</label>
        <input
          id="breed"
          value={cat.breed}
          type="text"
          onChange={handleTextChange}
          placeholder='Breed'
          required
        />
       <label htmlFor="image">image:</label>
        <input
          id="image"
          value={cat.image}
          type="text"
          onChange={handleTextChange}
          placeholder='Image URL'
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
