🌦️ Weather App

🌐 Live Demo (https://shammachale0102.github.io/Weather-Web/)

Weather App Live

📋 Project Overview

                     The Weather App is a React-based web application that allows users to search for current weather information of any city using the WeatherAPI. It fetches real-time data and displays temperature, humidity, wind speed, and weather conditions.

🛠️ Technologies Used

                    React.js (19.0.0)

                    Axios (1.8.3)

                    Material UI

                    WeatherAPI

                    GitHub Pages for deployment

🚀 Features

            Search for weather information by city name

            Displays temperature, humidity, wind speed, and weather condition

            Clear data functionality

            Error handling for invalid city names

📂 Project Structure

frontend-task/


│
├──   build/

├──   node_modules/

├──   public/

├──   src/



│         ├── components/

│     │     ├── Footer.js

│     │     ├── Header.js

│     │     ├── MainContent.js

│     │     ├── MainContent.css

│     │     └── SearchBar.js

│   ├── services/

│           │   └── api.js


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


🌱 Environment Variables

Create a .env file in the root directory and add the following line:

     REACT_APP_API_KEY=your_weather_api_key

💻 Installation & Setup

Clone the repository:

      git clone https://github.com/Shammachale0102/Weather-Web.git

Navigate to the project directory:

     cd frontend-task

Install dependencies:

     npm install

Run the application locally:

     npm start

🚀 Deployment

Build the project and deploy it on GitHub Pages:

     npm run build
     npx gh-pages -d build

🐞 Troubleshooting

    Ensure you have set up the .env file with the correct API key.

    Check the console for errors related to CORS or API restrictions.

📄 License

    MIT License

📞 Contact

For queries and feedback, contact: [sham.machale0102@gmail.com or (https://github.com/Shammachale0102)]
