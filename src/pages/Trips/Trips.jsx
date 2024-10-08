import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Trips.css'; 
import { Link } from 'react-router-dom'; 

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [editingTrip, setEditingTrip] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    countries: [{ country: '', startDate: '', endDate: '' }]
  });

  const [isSignedIn, setIsSignedIn] = useState(false); // Track if user is signed in

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsSignedIn(true); // User is signed in if token exists
      fetchTrips(token); // Fetch trips if signed in
    }
  }, []);

  const fetchTrips = async (token) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      };
      const response = await axios.get('https://backpacker-backend.onrender.com/trips', config);
      setTrips(response.data.trips);
    } catch (error) {
      console.error('Error fetching trips:', error);
    }
  };

  const handleEditChange = (index, e) => {
    const { name, value } = e.target;
    const newEditFormData = { ...editFormData };
    newEditFormData.countries[index][name] = value;
    setEditFormData(newEditFormData);
  };

  const handleEditSubmit = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Cannot update trip.');
      return;
    }

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      };
  
      const updatedTrip = {
        ...editFormData,
        lastEdited: new Date(),
      };
  
      const response = await axios.put(`https://backpacker-backend.onrender.com/trips/${id}`, updatedTrip, config);
  
      setTrips((prevTrips) => {
        const updatedTrips = prevTrips.map((trip) =>
          trip._id === id ? response.data.trip : trip
        );
        return updatedTrips.sort((a, b) => new Date(b.lastEdited) - new Date(a.lastEdited));
      });
  
      setEditingTrip(null);
    } catch (error) {
      console.error('Error updating trip:', error);
    }
  };  

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('No token found. Cannot delete trip.');
      return;
    }
  
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Include token in headers
        },
      };
  
      await axios.delete(`https://backpacker-backend.onrender.com/trips/${id}`, config);
      setTrips(trips.filter(trip => trip._id !== id));
    } catch (error) {
      console.error('Error deleting trip:', error);
    }
  };  

  const startEditing = (trip) => {
    setEditingTrip(trip._id);
    setEditFormData({ title: trip.title, countries: trip.countries });
  };

  const addCountry = () => {
    setEditFormData(prevState => ({
      ...prevState,
      countries: [...prevState.countries, { country: '', startDate: '', endDate: '' }]
    }));
  };

  const removeCountry = (index) => {
    setEditFormData(prevState => {
      const newCountries = prevState.countries.filter((_, i) => i !== index);
      return { ...prevState, countries: newCountries };
    });
  };

  const moveCountry = (index, direction) => {
    const updatedCountries = [...editFormData.countries];
    const [movedItem] = updatedCountries.splice(index, 1);
    updatedCountries.splice(index + direction, 0, movedItem);
    setEditFormData((prevState) => ({
      ...prevState,
      countries: updatedCountries,
    }));
  };

  return (
    <div className="trips-container">
      {trips.length === 0 ? (
        <div className="no-trips">
          {isSignedIn ? (
            <>
              <p>No Trips Planned</p>
              <div className="create-trip-container">
                <Link to="/Create">
                  <button className="create-trip-button">
                    Create Trip
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <p>Please Make Sure You're Signed-In To Create Trips!</p>
          )}
        </div>
      ) : (
        <>
          <h2 className="first-title">See All Your Trips!</h2>
          <div className="trips-list">
            {trips.map((trip, index) => (
              <React.Fragment key={trip._id}>
                <div className="trip-card">
                  {editingTrip === trip._id ? (
                    <div className="edit-form">
                      <input
                        type="text"
                        name="title"
                        value={editFormData.title}
                        onChange={(e) =>
                          setEditFormData((prevState) => ({
                            ...prevState,
                            title: e.target.value,
                          }))
                        }
                        placeholder="Title"
                        className='edit-title'
                      />
                      <div>
                        {editFormData.countries.map((country, index) => (
                          <div key={index} className="edit-entry">
                          <div className="up-down-buttons">
                            <button
                              disabled={index === 0}
                              onClick={() => moveCountry(index, -1)}
                            >
                              Move Up
                            </button>
                            <button
                              disabled={index === editFormData.countries.length - 1}
                              onClick={() => moveCountry(index, 1)}
                            >
                              Move Down
                            </button>
                          </div>

                          <div className="country-form-group-horizontal">
                            <label>Country</label>
                            <input
                              type="text"
                              name="country"
                              value={country.country || ""}
                              onChange={(e) => handleEditChange(index, e)}
                              placeholder="Country"
                            />
                          </div>

                          <div className="country-form-group-horizontal">
                            <label>Start Date</label>
                            <input
                              type="date"
                              name="startDate"
                              value={country.startDate ? country.startDate.split("T")[0] : ""}
                              onChange={(e) => handleEditChange(index, e)}
                            />
                          </div>

                          <div className="country-form-group-horizontal">
                            <label>End Date</label>
                            <input
                              type="date"
                              name="endDate"
                              value={country.endDate ? country.endDate.split("T")[0] : ""}
                              onChange={(e) => handleEditChange(index, e)}
                            />
                          </div>

                          <button
                            className="remove-button"
                            type="button"
                            onClick={() => removeCountry(index)}
                          >
                            Remove
                          </button>
                        </div>                        
                        ))}
                      </div>

                      <button
                        className="add-country-button"
                        type="button"
                        onClick={addCountry}
                      >
                        Add Destination
                      </button>

                      <button
                        className="save-button"
                        onClick={() => handleEditSubmit(trip._id)}
                      >
                        Save
                      </button>

                      <button
                        className="cancel-button"
                        onClick={() => setEditingTrip(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="trip-details">
                      <h1 className="trip-title">- {trip.title} -</h1>

                      <div className="trip-details-grid">
                        {trip.countries.map((country, index) => (
                          <div key={index} className="trip-country">
                            <h2>{country.country}</h2>
                            <p>
                              <strong> <span className='from-to'>From</span>:</strong>{" "}
                              {new Date(country.startDate).toDateString()}
                              <br></br>
                              <strong className='to-styling'> <span className='from-to'>To</span>:</strong>{" "}
                              {new Date(country.endDate).toDateString()}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="trip-actions">
                        <button
                          className="edit-button"
                          onClick={() => startEditing(trip)}
                        >
                          Edit
                        </button>
                        <button
                          className="delete-button"
                          onClick={() => handleDelete(trip._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                {index < trips.length - 1 && <hr className='trip-divider' />} {/* Adds hr between trips */}
              </React.Fragment>
            ))}
          </div>
          <hr className='last-hr' /> {/* Horizontal line to separate the list and the Create Trip button */}
          <div className="create-trip-container">
            <Link to="/Create">
              <button className="create-trip-button">
                Create Trip
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Trips;