# ItsyBitsyWebapp

## Overview

ItsyBitsyWebapp is a web application built with React on the client side and Express.js on the server side. It provides personalised stock recommendations to the user.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)

## Features

### Client-Side Code

#### React Components

- Well-organized React components for various sections such as Login, Signup, Dashboard, News, Holdings, Notifications, Buysellform, etc.
- Separation of concerns in component structure for maintainability.

#### Routing

- Utilized React Router for client-side navigation with Routes defined for different sections.
- Clear and intuitive route structure for seamless user flow.

#### State Management

- Efficient use of React state and props to manage and pass data between components.
- Proper handling of user input and form states in components.

#### Styling

- Applied consistent and appealing styling using CSS and Bootstrap.
- Responsive design for a user-friendly experience across different devices.

#### External Dependencies

- Integration of Axios for making asynchronous requests to the server.
- Proper installation and usage of React Router for navigation.

### Server-Side Code

#### Express Server

- Developed an Express.js server to handle HTTP requests.
- Configured middleware such as CORS and cookie-parser for enhanced functionality.

#### MongoDB Integration

- Integrated MongoDB for storing and retrieving user and stock-related data.
- Utilized Mongoose for smooth interaction with MongoDB.

#### User Authentication

- Implemented user authentication using JWT tokens for secure login.
- Secure storage of user credentials in MongoDB with password hashing.

#### API Endpoints

- Defined API routes for user registration, login, and retrieving data.
- Proper error handling and response generation in API routes.

#### Middleware

- Implemented middleware functions for route authentication.
- Ensured proper validation and verification of JWT tokens.

### Shared Code

#### Model Definition

- Well-defined Mongoose model for user data structure in the shared 'userSchema' file.

#### Authentication Middleware

- Creation of a reusable authentication middleware for protecting routes.

## Dependencies

### Client-side Dependencies:
#### React
A JavaScript library for building user interfaces.

```bash
# Installed via npm in the client directory
npm install react react-dom react-router-dom react-scripts
```
#### Axios
A promise-based HTTP client for making requests to your server.
```bash
# Installed via npm in the client directory
npm install axios
```
#### React Router
A declarative routing library for React.
```bash
# Installed via npm in the client directory
npm install react-router-dom
```
### Server-side Dependencies:
#### Express
A fast, unopinionated, minimalist web framework for Node.js.
```bash
# Installed via npm in the server directory
npm install express
```
#### Mongoose
An ODM (Object Data Modeling) library for MongoDB and Node.js.
```bash
# Installed via npm in the server directory
npm install mongoose
```
#### Bcryptjs
A library for hashing and comparing passwords.
```bash
# Installed via npm in the server directory
npm install bcryptjs
```
#### Jsonwebtoken (JWT)
For creating and verifying JSON Web Tokens.
```bash
# Installed via npm in the server directory
npm install jsonwebtoken
```
#### Cors
Middleware for enabling Cross-Origin Resource Sharing.
```bash
# Installed via npm in the server directory
npm install cors
```
#### Cookie-parser
Middleware for parsing cookies.
```bash
# Installed via npm in the server directory
npm install cookie-parser
```

## Getting Started

Follow the steps below to get started with the ItsyBitsyWebapp project:

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB server running (for database)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ItsyBitsyWebapp.git
cd ItsyBitsyWebapp
```
2. Install client-side dependencies:
```bash
cd client
npm install
```
3. Install server-side dependencies:
```bash
cd server
npm install
```
## Configuration
1. Create a .env file in the server directory and add the following configuration:
```bash
PORT=5000
DATABASE_URI=mongodb://localhost:27017/yourdatabase
SECRET_KEY=your_secret_key_for_jwt
```
2. Update the client-side configuration if needed. Check .env or other configuration files in the client directory.
   
## Usage
1. Start the server:
```bash
cd server
npm start
```

2. Start the client:
```bash
cd client
npm start
```
Visit http://localhost:3000 in your browser to access the ItsyBitsyWebapp.

