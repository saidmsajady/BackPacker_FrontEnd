import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="container">
      <h1>This is my Backpacking Trip Planner</h1>
      
      <div className='overview'>
        <h2>Overview</h2>
        <p>The Backpacking Trip Planner is a full-stack MERN application designed to help users plan and manage their backpacking trips. This project was inspired by my own experience on a Europe trip that turned out to be very disorganized and chaotic when it came to planning. I realized the need for a tool that could streamline the process, making it easier to plan trips and keep everything organized. From the very start of my class, I knew this was the project I wanted to create to help others avoid the hassles I faced and myself with future trips.</p>

        <p>With this application, users can create, read, update, and delete trips seamlessly through a React frontend connected to an Express and MongoDB backend. The application also leverages a third-party API to provide enriched information and features.</p>
      </div>

      <div className='features'>
        <h2>Features</h2>
        <p>
          <ul>
            <li><b>Full CRUD Operations: </b>Users can create, read, update, and delete trips.</li>
            <li><b>React Hooks: </b>Utilizes useState, useEffect, and other React hooks to manage state and side effects.</li>
            <li><b>Responsive Design: </b>Ensures a user-friendly experience across different devices.</li>
            <li><b>Third-Party API Integration: </b> Incorporates data from a third-party API to enhance trip planning.</li>
            <li><b>Four Key Pages:</b> Home, Create Trip, Countries, and About.</li>
          </ul>
        </p>
      </div>

      <div className='technologies'>
        <h2>Technologies</h2>
        <ul>
          <li><b>FrontEnd</b></li>
          <ul>
            <li>React</li>
            <li>React router</li>
            <li>CSS</li>
          </ul>
          <li><b>Backend</b></li>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Mongoose</li>
          </ul>
        </ul>
      </div>

      <div className='future'>
        <h2>Future Improvments</h2>
        <p>
          <ul>
            <li><b>Drag and Drop: </b>Being able to drag different trips also within trips drag different countries to reasign backpacking trip country order.</li>
            <li><b>Additional Features: </b>Add features such as user authentication, trip sharing, and more detailed trip planning options.</li>
            <li><b>Mobile App: </b>Develop a mobile version of the application using React Native.</li>
          </ul>
        </p>
      </div>

      <div className='github-repo'>
        <h2>Other GitHub Repositories</h2>
        <ul><b>For the Front End</b></ul>
        <li>https://github.com/saidmsajady/Capstone_FrontEnd.git</li>
        <ul><b>For the Back End</b></ul>
        <li>https://github.com/saidmsajady/Capstone_BackEnd.git</li>
        <ul><b>Repo that contains my Commits</b></ul>
        <li>https://github.com/saidmsajady/Capstone.git</li>
      </div>
    </div>
  )
}

export default About