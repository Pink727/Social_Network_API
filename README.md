# Social Network API

## Overview

This project is a Social Network API built using TypeScript, Express.js, and MongoDB. It allows users to share their thoughts, react to friends' thoughts, and manage a friend list. The API is designed to handle large amounts of unstructured data efficiently.

## Technologies Used

- TypeScript
- Express.js
- MongoDB
- Mongoose

## Project Structure

```
social-network-api
├── src
│   ├── controllers        # Contains controllers for handling requests
│   ├── models             # Contains Mongoose models for data structure
│   ├── routes             # Contains route definitions for the API
│   ├── services           # Contains business logic for user and thought management
│   ├── app.ts             # Entry point of the application
│   └── types              # Contains TypeScript interfaces
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd social-network-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Use a tool like Insomnia or Postman to interact with the API. The following routes are available:

   - **Users**
     - `POST /api/users` - Create a new user
     - `GET /api/users/:id` - Get a user by ID
     - `PUT /api/users/:id` - Update a user by ID
     - `DELETE /api/users/:id` - Delete a user by ID

   - **Thoughts**
     - `POST /api/thoughts` - Create a new thought
     - `GET /api/thoughts/:id` - Get a thought by ID
     - `PUT /api/thoughts/:id` - Update a thought by ID
     - `DELETE /api/thoughts/:id` - Delete a thought by ID

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.