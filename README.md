# Toy Robot Simulator

This application simulates a toy robot moving on a 5x5 square tabletop. The robot can move freely around the surface but is prevented from falling off the table. The app includes user commands to control the robot's movement, direction, and placement, all while ensuring that invalid actions are appropriately handled.

---

## Features

- **Tabletop Simulation:** A 5x5 grid represents the tabletop.
- **Robot Controls:**
  - Place the robot on the tabletop at a specific position and direction.
  - Move the robot forward in the current direction.
  - Rotate the robot left or right.
  - Prevent invalid moves that would cause the robot to fall off the tabletop.
- **User Feedback:** Displays the current position and direction of the robot.
- **Customizable:** The application is built with modular, reusable logic to enable future expansions.

---

## Installation

Follow these steps to set up the project on your local machine:

1. Install dependencies with `npm install`:

   ```bash
   npm install
   ```

2. Run the application with `npm run dev`:

   ```bash
   npm run dev
   ```

3. Open the application in your browser at `http://localhost:5173`.

## Scripts

The following scripts are available to run and manage the project:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run tsc`: Compiles TypeScript files to JavaScript.
- `npm run lint`: Runs linting checks on TypeScript files.
- `npm run format`: Formats TypeScript files using Prettier.
- `npm run test`: Runs tests using Jest.

## License

This project is licensed under the MIT license.
