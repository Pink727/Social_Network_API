
# Social Network API

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

This project is a Social Network API built using TypeScript, Express.js, and MongoDB. It allows users to share their thoughts, react to friends' thoughts, and manage a friend list. The API is designed to handle large amounts of unstructured data efficiently.


## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)


## Technologies Used

- TypeScript
- Express.js
- MongoDB
- Mongoose


## Video

For a detailed walkthrough of the project, please watch the following video:

[Walkthrough Video](https://youtu.be/5CqB7W2NgWQ)


## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd social-network-api
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage

1. Start the application:
   ```sh
   npm start
   ```
2. Use a tool like Insomnia or Postman to interact with the API. The following routes are available:

   - **Users**
   
     - `GET /api/users` - Get all users
     - `POST /api/users` - Create a new user
     - `GET /api/users/:id` - Get a user by ID
     - `PUT /api/users/:id` - Update a user by ID
     - `DELETE /api/users/:id` - Delete a user by ID

   - **Thoughts**
     - `POST /api/thoughts` - Create a new thought
     - `GET /api/thoughts/:id` - Get a thought by ID
     - `PUT /api/thoughts/:id` - Update a thought by ID
     - `DELETE /api/thoughts/:id` - Delete a thought by ID

   - **Reactions**
     - `PUT /api/thoughts/:thoughtId/reactions` - Update a reaction by thought ID


   - **Friends**
      - `POST /api/users/:userId/friends/:friendId` - Add a friend
      - `DELETE /api/users/:userId/friends/:friendId` - Delete a friend


## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Questions

For any questions, please contact me with the information below:

GitHub: [Pink727](https://github.com/Pink727)

© 2025 Pink727. All Rights Reserved.

