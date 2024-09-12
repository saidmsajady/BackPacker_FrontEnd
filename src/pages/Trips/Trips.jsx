import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Trips.css'; 
import { Link } from 'react-router-dom'; 
import { FaBars } from 'react-icons/fa'; // Import the hamburger icon from react-icons

const Trips = () => {
  const [trips, setTrips] = useState([]);
  const [editingTrip, setEditingTrip] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: '',
    countries: [{ country: '', startDate: '', endDate: '' }]
  });

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get('http://localhost:3000/trips');
        setTrips(response.data.trips);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, []);

  const handleEditChange = (index, e) => {
    const { name, value } = e.target;
    const newEditFormData = { ...editFormData };
    newEditFormData.countries[index][name] = value;
    setEditFormData(newEditFormData);
  };

  const handleEditSubmit = async (id) => {
    try {
      const updatedTrip = {
        ...editFormData,
        lastEdited: new Date(),
      };

      const response = await axios.put(`http://localhost:3000/trips/${id}`, updatedTrip);

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
    try {
      await axios.delete(`http://localhost:3000/trips/${id}`);
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

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(editFormData.countries);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setEditFormData((prevState) => ({
      ...prevState,
      countries: items,
    }));
  };

  return (
    <>
      <div className="trips-container">
        {trips.length === 0 ? (
          <div className="no-trips">
            <p>No Trips Planned</p>
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
                        <DragDropContext onDragEnd={onDragEnd}>
                          <Droppable droppableId="countries">
                            {(provided) => (
                              <div {...provided.droppableProps} ref={provided.innerRef}>
                                {editFormData.countries.map((country, index) => (
                                  <Draggable
                                    key={index}
                                    draggableId={index.toString()}
                                    index={index}
                                  >
                                    {(provided) => (
                                      <div
                                        className="edit-entry"
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                      >
                                        {/* Hamburger icon for dragging */}
                                        <div className="drag-handle">
                                          <FaBars />
                                        </div>

                                        {/* Country input with label on the left */}
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

                                        {/* Start Date input with label on the left */}
                                        <div className="country-form-group-horizontal">
                                          <label>Start Date</label>
                                          <input
                                            type="date"
                                            name="startDate"
                                            value={country.startDate ? country.startDate.split("T")[0] : ""}
                                            onChange={(e) => handleEditChange(index, e)}
                                          />
                                        </div>

                                        {/* End Date input with label on the left */}
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
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </DragDropContext>

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
                                <strong>From:</strong>{" "}
                                {new Date(country.startDate).toDateString()}
                                <br></br>
                                <strong> To:</strong>{" "}
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
                  {index < trips.length - 1 && <hr className='trip-divider'/>} {/* Adds hr between trips */} 
                </React.Fragment>
              ))}
            </div>
            <hr  className='last-hr'/> {/* Horizontal line to separate the list and the Create Trip button */}
            <div className="create-trip-container">
              <Link to="/Create">
                <button className="create-trip-button">Create Trip</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Trips;
