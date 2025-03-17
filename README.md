Weather App Documentation

Project Overview

The Weather App is a React-based application that allows users to search for real-time weather information of any city using the WeatherAPI.

Features

Search for weather data by city name

Display temperature, humidity, wind speed, and weather conditions

Clear search data

Error handling for invalid city names

Responsive UI design

Project Structure

frontend-task/
│
├── build/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── MainContent.js
│   │   ├── MainContent.css
│   │   └── SearchBar.js
│   ├── services/
│   │   └── apis
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .env
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

Installation

Clone the repository:

git clone https://github.com/Shammachale0102/Weather-Web.git

Navigate to the project directory:

cd frontend-task

Install dependencies:

npm install

API Key Configuration

Create a .env file in the root directory and add the following:

REACT_APP_API_KEY=your_api_key_here

Running the Application

Start the development server:

npm start

Access the app at http://localhost:3000.

Deployment

Add the homepage field in package.json:

"homepage": "https://Shammachale0102.github.io/Weather-Web"

Build the application:

npm run build

Deploy using GitHub Pages:

npx gh-pages -d build

Access the Deployed App

Weather App on GitHub Pages

Known Issues

Error message "Failed to fetch data. Please check the city name." could occur due to invalid API key or CORS issues.

Ensure the .env file is correctly set up and not ignored by .gitignore.

License

MIT License
