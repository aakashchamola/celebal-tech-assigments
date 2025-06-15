# Celebal Tech Assignments

This repository contains my weekly Celebal summer internship assignments. 
Each week's assignment is stored in a separate branch.


## Week-2 Assignment
The Week-2 assignment focuses on creating a RESTful API using Node.js. The API includes endpoints for basic CRUD operations on files stored in the `files` directory.

### What I Did:
- Used the built-in `http` module to create a server.
- Implemented routing logic manually to handle different endpoints:
  - `POST /create`: Create a new file.
  - `GET /read`: Read the contents of a file.
  - `DELETE /delete`: Delete a file.
- Created a `fileController` module to handle file operations such as creating, reading, and deleting files.
- Used the `fs` module for file system operations.
- Tested the API using tools like Postman or curl.

### How It Works:
1. **Setup**: The server is created using the `http` module and listens on port `8000`.
2. **Routing**: The `fileRoutes` module defines the logic for handling different endpoints based on the request method and URL.
3. **File Operations**: The `fileController` module performs file operations such as creating, reading, and deleting files in the `files` directory.
4. **Response Handling**: The `responseUtils` module is used to send JSON responses with appropriate status codes.
5. **Testing**: The API can be tested by sending HTTP requests to the server using tools like Postman.

### Key Objectives:
- Learn how to create a RESTful API without using external frameworks.
- Understand how to manually implement routing logic.
- Perform file system operations using the `fs` module.
- Test the API locally using HTTP request tools.

### Run and Use the Program

To interact with the API, you can use the following `curl` commands:

#### Create a File
To create a new file, use the `POST /create` endpoint:
```bash
curl -X POST http://localhost:8000/create -H "Content-Type: application/json" -d '{"filename": "example.txt", "content": "This is a sample file content for the celebal node.js internship"}'
```

#### Read a File
To read the contents of a file, use the `GET /read` endpoint:
```bash
curl -X GET http://localhost:8000/read -H "Content-Type: application/json" -d '{"filename": "example.txt"}'
```

#### Delete a File
To delete a file, use the `DELETE /delete` endpoint:
```bash
curl -X DELETE http://localhost:8000/delete -H "Content-Type: application/json" -d '{"filename": "example.txt"}'
```

Replace `example.txt` with the name of the file you want to create, read, or delete.

---

## How to Clone the Repository
To get started, clone this repository to your local machine:
1. Open your terminal.
2. Run the following command:
   ```bash
   git clone https://github.com/aakashchamola/celebal-tech-assigments.git
   ```

3. Navigate to the project directory:
   ```bash
   cd celebal-tech-assigments
   ```
After cloning for the first time, You will be inside the main Branch which will contain a README.md file that will guide you as to how to view each week's assignment.

## How to Switch Branches
To view the code for a specific week's assignment:
1. Open your terminal.
2. Navigate to the project directory if not already:
   ```bash
   cd celebal-tech-assigments
   ```
3. Switch to the desired branch, (example for week 1):
   ```bash
   git checkout week-1
   ```
   Replace `week-1` with the branch name (e.g., `week-2`, `week-3`).

## How to Run the Program
1. Ensure you have Node.js installed. You can verify by running:
   ```bash
   node -v
   ```
   If Node.js is not installed, download and install it from [Node.js official website](https://nodejs.org/).

2. Navigate to the branch directory where the code resides.

3. Run the program:
   ```bash
   node server.js
   ```
   Replace `server.js` with the name of the file containing the main code for the assignment.

4. Open your browser and visit `http://localhost:8000` to see the results. 
I have used the port 8000, if you have wanna change it you change the 
``` const PORT = 8000;``` in  server.js file and accordingly visit the link with the your port number to see the results
Replace `8000` with the port number you specified in the code (e.g., `3000`).