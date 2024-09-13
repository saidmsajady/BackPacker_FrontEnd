import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Create.css';

const Create = () => {
  const [title, setTitle] = useState('');
  const [countries, setCountries] = useState([{ country: '', startDate: '', endDate: '' }]);
  const navigate = useNavigate();

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newCountries = [...countries];
    newCountries[index][name] = value;
    setCountries(newCountries);
  };

  const handleAddCountry = () => {
    setCountries([...countries, { country: '', startDate: '', endDate: '' }]);
  };

  const handleRemoveCountry = (index) => {
    setCountries(countries.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found, cannot create trip');
      return;
    }
  
    const newTrip = {
      title,
      countries: countries.map(({ country, startDate, endDate }) => ({
        country,
        startDate: new Date(startDate).toISOString(),
        endDate: new Date(endDate).toISOString(),
      })),
    };
  
    try {
      console.log('Submitting the form');
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token in headers
        },
      };
  
      const response = await axios.post('http://localhost:3000/trips', newTrip, config);
  
      console.log('Trip created:', response.data.trip);
      navigate('/Trips');
    } catch (error) {
      console.error('There was an error creating the trip!', error);
    }
  };  

  return (
    <>
      <h1 className='create-page-title'>Create your new trip below!</h1>
      <form className='create-container' onSubmit={handleSubmit}>
        <div>
          <label className='trip-title'>Trip Title:</label>
          <input className='title-input' placeholder='Enter Your Trip Title' type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>

        {countries.map((_, index) => (
          <div key={index} className="trip-entry">
            <label>Destination:</label>
            <input placeholder='Blank' type="text" name="country" value={countries[index].country} onChange={(e) => handleChange(index, e)} required />
            <label>Start Date:</label>
            <input type="date" name="startDate" value={countries[index].startDate} onChange={(e) => handleChange(index, e)} required />
            <label>End Date:</label>
            <input type="date" name="endDate" value={countries[index].endDate} onChange={(e) => handleChange(index, e)} required />
            <button type="button" onClick={() => handleRemoveCountry(index)}>Remove</button>
          </div>
        ))}
        <button type="button" onClick={handleAddCountry}>Add Destination</button>
        <button type="submit">Create Trip</button>
      </form>
    </>
  );
};

export default Create;