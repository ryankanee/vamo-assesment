# Vamo Assessment

A React application for delivery and order tracking functionality.

## Features

- **Delivery Management**: Create and manage delivery orders
- **Order Tracking**: Track orders with real-time status updates
- **Interactive Map**: Visualize delivery locations using Leaflet maps
- **Order Confirmation**: Modal-based order confirmation system

## Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vamo-assesment
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm start
```

This command will:

- Start the React development server
- Open the application in your default browser at `http://localhost:3000`
- Enable hot reloading for development

### 4. View the Application

Once the server is running, you can:

- Open your browser and navigate to `http://localhost:3000`
- The application will automatically reload when you make changes to the source code

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you eject, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time.

## Project Structure

```
src/
├── components/
│   ├── delivery/          # Delivery management components
│   ├── tracking/          # Order tracking components
│   └── Navbar.js          # Navigation component
├── data/
│   └── orders.js          # Sample order data
├── App.js                 # Main application component
└── App.css               # Global styles
```

## Technologies Used

- **React 19.1.1** - Frontend framework
- **React Leaflet 5.0.0** - Interactive maps
- **Leaflet 1.9.4** - Map library
- **React Scripts 5.0.1** - Build tooling

## Troubleshooting

If you encounter any issues:

1. **Port already in use**: If port 3000 is already in use, the app will prompt you to use a different port
2. **Dependencies issues**: Try deleting `node_modules` and `package-lock.json`, then run `npm install` again
3. **Browser compatibility**: Make sure you're using a modern browser that supports ES6+ features

## Learn More

To learn more about React, check out the [React documentation](https://reactjs.org/).
