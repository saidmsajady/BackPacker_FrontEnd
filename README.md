# Explore Mate

**Backend repository:** [Explore Mate Backend](https://github.com/saidmsajady/BackPacker_BackEnd)

## Overview

Explore Mate is a full-stack MERN application designed to streamline the process of planning and organizing backpacking trips. Inspired by my own experiences of chaotic and disorganized trips, this project helps users plan trips efficiently, manage destinations, and validate date ranges to avoid overlapping itineraries. With features like trip reordering, API integration, and user-friendly CRUD operations, Explore Mate simplifies the process of trip planning, allowing for a smoother and more enjoyable travel experience.

## Features

- **Full CRUD Operations**: Seamlessly create, read, update, and delete trips.
- **Responsive Design**: Optimized for mobile and desktop devices.
- **Date Validation**: Prevent overlapping dates between destinations within a trip.
- **Authentication**: Users can sign up, log in, and log out securely, with session management via JSON Web Tokens (JWT).
- **Third-Party API Integration**: Enrich trip planning with data from a third-party API.
- **Dynamic Country Management**: Manage and reorder countries within trips with ease.

## Technologies

### Frontend

- React
- React Router
- React Beautiful DnD
- Firebase Hosting
- CSS

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Render Hosting

## Packages and Dependencies

### Frontend

- `axios`: For making API requests.
- `react-beautiful-dnd`: For drag-and-drop reordering.
- `firebase`: For hosting and managing authentication.
- `uuid`: To generate unique identifiers.
- `react-icons`: For adding icons to the UI.
- `react-router-dom`: For routing and navigation.

### Backend

- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling.
- `jsonwebtoken`: For managing user sessions.
- `bcrypt`: For password hashing.
- `cors`: Enabling Cross-Origin Resource Sharing.
- `dotenv`: Managing environment variables.
- `axios`: For API requests.
- `morgan`: Logging HTTP requests.

## Pages

- **Home Page**: Introduction to Explore Mate with the option to sign up or log in.
- **Trips Page**: Display and manage backpacking trips, with drag-and-drop reordering and date validation.
- **Create Page**: Create new trips and add destinations.
- **Countries Page**: Manage country-specific details and their order within a trip.
- **About Page**: Information about the project and its inspiration.
- **Login/Signup**: Secure user authentication.
