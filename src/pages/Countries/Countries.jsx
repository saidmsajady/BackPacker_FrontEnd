import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Countries.css';

const Countries = () => {
  // State variables for countries data, search term, regions, and selected region
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');

  // useEffect hook to fetch countries data when the component mounts
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        // Fetch countries data from the REST Countries API
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,flags,capital,region,subregion,languages,currencies');
        
        // Sort the countries alphabetically by their common name
        const sortedCountries = response.data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);

        // Extract unique regions from the fetched countries data
        const uniqueRegions = [...new Set(response.data.map(country => country.region).filter(Boolean))];
        setRegions(uniqueRegions);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  // Handler for the search input change event
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler for the region select change event
  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  // Filter the countries based on the search term and selected region
  const filteredCountries = countries.filter(country => {
    return (
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion ? country.region === selectedRegion : true)
    );
  });

  return (
    <>
      <h1 className='countries-page-title'>Get some inspo for your trip!</h1>
      <div className='container-country'>
      <br/><br/>
      <div className="filter-controls">
        {/* Search input for filtering countries by name */}
        <input type="text" placeholder="Search by country name" value={searchTerm} onChange={handleSearchChange} className="search-input"/>
        {/* Dropdown for selecting a region to filter countries */}
        <select value={selectedRegion} onChange={handleRegionChange} className="region-select">
          <option value="">All Regions</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      
      <div className="countries-container">
        {/* Map over the filtered countries and render each country card */}
        {filteredCountries.map(country => (

          <div key={country.name.common} className="country-card">
            <img src={country.flags.svg} alt={`${country.name.common} flag`} className="country-flag" />
            <h2>{country.name.common}</h2>

            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <p>Region: {country.region || 'N/A'}</p>
            <p>Languages: {country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            <p>Currencies: {country.currencies ? Object.values(country.currencies).map(currency => currency.name).join(', ') : 'N/A'}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Countries;