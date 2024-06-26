UserBackend NodeJs Project

1. Project Description
Node.js Backend Project for User Management
This project serves as a backend API for user management, providing endpoints to perform CRUD operations on users. It incorporates validation using Joi for robust request validation and employs Basic Authentication to secure API calls.


2. Features
Create New User: Endpoint to create a new user with validated fields such as email, name, age, city, zip code, and optional deletion status.

Get All Users: Endpoint to retrieve a list of all users currently stored in the database.

Find User by ID: Endpoint to search for and retrieve a specific user based on their unique identifier.

Update User by ID: Endpoint to modify user details, including validated updates to fields such as email, name, age, city, zip code, and deletion status.

Soft Delete User: Endpoint to mark a user as deleted without removing them from the database, providing data integrity and recovery options.


3. Technologies Used
Node.js: Backend runtime environment.
Express.js: Web framework for Node.js, facilitating API routing and middleware integration.
Joi: Schema validation library for validating request bodies and ensuring data integrity.
Basic Authentication: Implemented to authenticate each API call, ensuring secure access to endpoints.
MongoDB (or alternative database): Storage for user data, supporting CRUD operations through Mongoose (or equivalent ODM/ORM).


4. Installation and Setup

To set up the project locally, follow these steps:

 a). Clone the Repository:
      git clone https://github.com/your/repository.git
      cd repository

 b). Install Dependencies:
     npm install

 c). Set Environment Variables:
     Configure environment variables for database connection and Basic Authentication credentials if required (PORT, MONGODB_URI, BASIC_AUTH_USERNAME, BASIC_AUTH_PASSWORD).

 d). Run the Application:
     npm start


5. API Documentation:

   Endpoints
   
    a)  POST  ->  /worko/add/user
        Create a new user with validated fields.
   
    b)  GET ->  /worko/all
        Retrieve all users.
   
    c)  GET ->  /worko/finduser/:userId
        Find a user by their unique ID.
   
    d)  PUT  ->  /worko/update/:userId
        Update user details by their ID with validated fields.
   
    e)  PATCH  -> /worko/update/:userId
        Update user details by their ID with validated fields.
   
    e)  DELETE  -> /worko/delete/:userId
        Soft delete a user by marking them as deleted.


6. Authentication
   Basic Authentication: All API calls are authenticated using Basic Authentication. Ensure correct credentials (BASIC_AUTH_USERNAME and BASIC_AUTH_PASSWORD) are provided in the request headers to access endpoints.

7. Dependencies
    Major dependencies used in the project.
    
    a) Express.js: Web framework for Node.js.
    b) Joi: Schema validation for JavaScript objects.
    c) MongoDB: Database for storing user data (example).
    d) Dotenv: Module that loads environment variables from a .env file into process.env.
    e) Base64-js: JavaScript library for encoding and decoding base64 data. 
