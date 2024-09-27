# GupSup Media
## hosting gupsup media wep app :- https://social-gup-sup-app-1-frontend.onrender.com
GupSup Media is a full-stack social media platform built using the MERN stack (MongoDB, Express, React, Node.js) along with Socket.IO for real-time communication and Redux for state management on the frontend. The project is divided into three main parts:

1. **Backend**: Handles API requests, authentication, and data storage using MongoDB.
2. **Socket**: Manages real-time features such as messaging using Socket.IO.
3. **Frontend**: Built using React and Redux, providing a seamless and interactive user interface.

## Table of Contents

- [Getting Started](#getting-started)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB set up and running.
- Stripe account for payment integration (if applicable).

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/gupSup-media.git
   cd gupSup-media
### backend
cd backend
npm install

### fronend
cd ../frontend
npm install

### socket
cd ../socket
npm install

### env
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret>
SOCKET_PORT=<Your Socket.IO Server Port>
SOCKET_PORT=<Your Socket.IO Server Port>

