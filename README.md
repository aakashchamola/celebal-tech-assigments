# Celebal Tech Assignments

This repository contains my weekly Celebal summer internship assignments. 
Each week's assignment is stored in a separate branch.

## Week-4 Assignment

The Week-4 assignment focuses on building a modular, feature-rich web server using **Express.js**. This week’s goal was to move from the low-level `http` module to Express, covering middleware, routing, static files, and template engines.

### What I Did:
- Set up a modular Express.js project.
- Implemented routing using `express.Router()` in a separate `routes` folder.
- Added global and route-level middleware.
- Rendered dynamic HTML pages using the **EJS** template engine.
- Served **static files** like CSS from the `public` folder.
- Demonstrated **query parameters** and **URL parameters** in routes.
- Followed best practices with a clean folder structure.

### How It Works:
1. **Entry Point:** The server starts from `server.js` using Express.
2. **Routing:** Defined in `routes/mainRoutes.js`:
   - `/` → Home (EJS-rendered)
   - `/about` → About (EJS-rendered)
   - `/greet?name=John` → Query param demo
   - `/user/:id` → URL param demo
3. **Middleware:**
   - `middleware/logger.js` logs every request with timestamp.
4. **Views:**
   - EJS templates are located in the `views/` folder.
5. **Static Files:**
   - CSS and assets are served from `public/`.

### Key Objectives:
- Understand what Express.js is and why it simplifies server logic.
- Learn how to define clean, maintainable routes using `express.Router`.
- Implement custom and global middleware.
- Handle request data through **query strings** and **dynamic URL segments**.
- Use **EJS** to render dynamic HTML.
- Serve static assets like CSS using `express.static`.

---

### 🧪 Folder Structure

week-4/
   └── src/
      ├── middlewares/
      │   └── logger.js
      ├── public/
      │   └── index.css
      ├── routes/
      │   └── mainRoutes.js
      └── views/
         ├── about.ejs
         └── index.ejs
   ├── .gitIgnore
   ├── README.md
   ├── server.js

---

### 🧪 Test the Server

#### 1. Start the Server
```bash
node server.js


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