<div align="center">
    <h1><strong>✅TodoPro</strong></h1>
</div>
<p align="center">    
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/node.js-6DA55F?&logo=node.js&logoColor=white">
    </a>   
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/express.js-%23404d59.svg?&logo=express&logoColor=%2361DAFB">
    </a>    
     <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/react-%2320232a.svg?&logo=react&logoColor=%2361DAFB">
    </a>   
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&logo=mongodb&logoColor=white">
    </a>
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/typescript-gray?logo=typescript">
    </a>
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/tailwind-blue?logo=tailwindcss">
    </a>
    <a href="">
        <img alt="GitHub" src="https://img.shields.io/badge/redux-violet?logo=redux">
    </a>
</p>

<h4 align="center">
    <p>
        <a href="https://todopro-9pf2.onrender.com/">See live demo</a>
    <p>
</h4>

TodoPro is an advanced todo application built with React.js, Node.js, Express, and MongoDB, utilizing TypeScript for development. It provides a dynamic user interface for efficient todo tracking, secure authentication with Google, and customizable theme options with dual theme functionality. Features include creating, deleting, and editing todo tasks, as well as updating todo progress. With sorting by priority and timestamps, TodoPro offers enhanced organization and management of todos.

## Key Features:
- **Dynamic UI**: Developed with React.js and TypeScript for a dynamic user experience.
- **Secure Authentication**: Utilizes Google authentication for secure user access.
- **Dual Theme Functionality**: Offers both dark and light themes for customizable UI options, powered by Tailwind CSS.
- **Todo Management**: Allows users to create, delete, and edit todo tasks.
- **Progress Update**: Integrated Redux for state management, enabling todo progress updates.
- **Sorting Options**: Provides sorting by priority and creation timestamps for better todo organization.

## UI demo
  <p align="center">
    <picture>
    <img alt="tutornest" src="https://github.com/SHUHAIB-T/TodoPro-MERN/blob/main/screenshorts/todo%20dark.png" width=90%>
    </picture>
</p>
<p align="center">
    <picture>
    <img alt="tutornest" src="https://github.com/SHUHAIB-T/TodoPro-MERN/blob/main/screenshorts/todo%20light.png" width=90%>
    </picture>
</p>

## Run this locally in your system:

1. Clone the repository:
   ```bash
   git clone https://github.com/SHUHAIB-T/TodoPro-MERN.git
2. Navigate to the project directory:
    ```bash
   cd TodoPro
3. Install dependencies for both frontend and backend:
    ```bash
    cd client
    npm install
    cd ..
    cd server
    npm install
4. Set up environment variables:
   - Create a .env file in the server directory and add necessary environment variables.
   - Example:
     ```makefile

     ## server-env
     PORT=5000
     ENVIRONMENT=development
     FRONTENT_URL=http://localhost:4000
     FRONTENT_URL_DEPLOYED=<deployed-url>
     MONGO_URI=<mongo-URI>
     JWT_SECRET=<JWT-secret-key>

     ## client-env
     VITE_CLIENT_Id=<your-google-client-id>
     VITE_BASE_URL=http://localhost:5000
  5. Start the development server:
     ```bash
     cd client
     npm run dev
     cd ..
     cd server
     npm start
  6. Access TodoPro in your browser at [http://localhost:4000](http://localhost:4000).

## Technologies Used:
- React.js
- Node.js
- Express
- MongoDB
- TypeScript
- Redux
- Tailwind CSS
## Contributing:
Contributions are welcome! Feel free to submit issues and pull requests.
