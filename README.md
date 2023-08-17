# API guidelines
* Send Request in the following format
```
{
    query : "Hi, How is the weather today"
}
```
* The Expected Response should be the the following JSON format

```
{
    "output": "I'm sorry, but as an AI, I do not have the ability to determine the current weather. Please check a reliable source such as a weather website or app for the most accurate and up-to-date information on the weather in your area."
}
```
# BlazeFit
Welcome to BlazeFit - Your Ultimate Fitness and Wellness Companion!

* BlazeFit is a cutting-edge mobile application built using Flutter for the front-end and Node.js for the back-end.
* This app aims to provide a comprehensive platform for tracking fitness activities, sleep patterns, and overall wellness. 
* It leverages the power of AI through the integration of OpenAI API for a personalized chatbot experience and MindsDB model for accurate regression-based sleep disorder tracking.

## Features
1. Fitness Tracking
Log your workouts, track your steps, and monitor your progress.
Choose from a variety of exercises and activities to customize your fitness routine.
Set fitness goals and receive real-time feedback to stay motivated.
2. Sleep Disorder Tracking
BlazeFit integrates the MindsDB regression model to analyze your sleep patterns and predict potential sleep disorders.
Input your sleep data, and the app will provide insights into your sleep quality and highlight any anomalies.
3. Personalized Chatbot
Our AI-powered chatbot, built using the OpenAI API, offers guidance and answers to your fitness and wellness queries.
Get recommendations for workouts, nutrition, sleep hygiene, and more based on your individual profile.
4. User Authentication and Profiles
Create a personalized user account to securely store your fitness and wellness data.
Easily access your workout history, sleep analysis, and chatbot interactions.
5. User-Friendly Interface
BlazeFit boasts an intuitive and visually appealing interface for seamless navigation.
Enjoy a smooth user experience while accessing various features of the app.

## Installation and Setup
* Front-end (Flutter)
Clone this repository: git clone https://github.com/yourusername/blazefit-app.git
Navigate to the blazefit-app directory: cd blazefit-app
Install dependencies: flutter pub get
Run the app: flutter run
* Back-end (Node.js)
Clone the backend repository: git clone https://github.com/yourusername/blazefit-backend.git
Move to the blazefit-backend directory: cd blazefit-backend
Install dependencies: npm install
Set up your database (e.g., MongoDB) and update the configuration in config.js.
Start the server: ```node server.js```

## API Integrations
* OpenAI API
To integrate the OpenAI chatbot into BlazeFit, you'll need to sign up for an OpenAI API key and replace the placeholder key in the code with your actual key. Refer to OpenAI's documentation for details on how to set up the API: OpenAI API Documentation

* MindsDB Model
The MindsDB regression model for sleep disorder tracking should be trained and deployed separately. You can find instructions on how to use MindsDB in their documentation: MindsDB Documentation

Stay fit, stay healthy with BlazeFit! 🏋️‍♂️💤🤖
