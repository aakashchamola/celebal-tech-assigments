# Celebal Tech Assignments

This repository contains my weekly Celebal summer internship assignments. 
Each week's assignment is stored in a separate branch.

## Week-3 Assignment

The Week-3 assignment focuses on advancing asynchronous programming in Node.js. This week, the main goal is to refactor the Week-2 RESTful API to use **Promises** and **Async/Await** for better readability, error handling, and modern best practices. Additionally, an extra feature has been added to demonstrate **Promise chaining**, **Event Loop behavior**, and robust asynchronous handling.

### What I Did:
- Replaced all callback-based `fs` operations with `fs.promises` methods.
- Refactored `create`, `read`, and `delete` operations to use `async` functions with `await` and `try/catch` for clean error handling.
- Added a new endpoint `POST /copyAndRename`:
  - Demonstrates **Promise chaining** using `.then().then().catch()` instead of `async/await`.
  - Shows how multiple file operations (copy, delete) can be chained in Promises.
  - Includes `console.log` statements to illustrate how Node.js **Event Loop** executes synchronous and asynchronous code in order.
- Added a separate script (`callbacks-vs-promises.js`) to compare **Callbacks vs Promises vs Async/Await** side-by-side for educational clarity.
- Tested the API using curl and Postman.

### How It Works:
1. **Setup:** The server uses the built-in `http` module and listens on port `8000`.
2. **Routing:** The `fileRoutes` module handles four endpoints:
   - `POST /create` — Create a new file.
   - `GET /read` — Read a file’s contents.
   - `DELETE /delete` — Delete a file.
   - `POST /copyAndRename` — Copy a file to a new name and delete the original using Promise chaining.
3. **File Operations:** All operations use `fs.promises` instead of callbacks.
4. **Event Loop Demo:** Logs show the order of synchronous vs asynchronous execution.
5. **Testing:** Use curl or Postman to test all endpoints.

### Key Objectives:
- Understand the difference between **Callbacks**, **Promises**, and **Async/Await**.
- Implement robust error handling with `try/catch` and `.catch()`.
- Demonstrate **Promise chaining** and multiple asynchronous operations.
- Visualize the **Event Loop** in action through strategic logging.

### Run and Use the Program

To interact with the API, use the following `curl` commands:

#### Create a File
To create a file with a filename and some content , use the `POST /create` endpoint:
```bash
curl -X POST http://localhost:8000/create \
  -H "Content-Type: application/json" \
  -d '{"filename": "example.txt", "content": "This is a sample file content for Celebal Node.js internship - Week 3"}'
```

#### Rename a FileName
To rename the name of a File-Name, use the `POST /copyAndRename` endpoint:
```bash
curl -X POST http://localhost:8000/copyAndRename \
  -H "Content-Type: application/json" \
  -d '{"source": "source.txt", "destination": "destination.txt"}'
```

#### Read a File
To read the contents of a file, use the `GET /read` endpoint:
```bash
curl -X GET http://localhost:8000/read -H "Content-Type: application/json" -d '{"filename": "source.txt"}'
```

#### Delete a File
To delete a file, use the `DELETE /delete` endpoint:
```bash
curl -X DELETE http://localhost:8000/delete -H "Content-Type: application/json" -d '{"filename": "source.txt"}'
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