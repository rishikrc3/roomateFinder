## Project Structure

The project is organized as follows:

```text
/project
  ├── /controllers
  │   ├── userController.js   # Handles logic for user-related operations (e.g., login, registration, profile management)
  │   └── roomController.js   # Handles logic for room-related operations (e.g., create room, get room details, match rooms)
  ├── /middleware
  │   └── authenticate.js     # Middleware for JWT-based authentication
  ├── /models
  │   ├── User.js             # Defines the User model with MongoDB/Mongoose
  │   └── Room.js             # Defines the Room model with MongoDB/Mongoose
  ├── /routes
  │   ├── userRoutes.js       # Defines routes for user-related endpoints (e.g., login, registration, profile)
  │   └── roomRoutes.js       # Defines routes for room-related endpoints (e.g., create room, get rooms, match rooms)
  ├── index.js                # Main entry point for the application
  └── package.json            # Project dependencies and scripts
