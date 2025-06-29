# Celebal Tech Assignments

This repository contains my weekly Celebal summer internship assignments. 
Each week's assignment is stored in a separate branch.

## Week-4 Assignment

The Week-4 assignment focuses on building a modular, feature-rich web server using **Express.js**. This week’s goal was to move from the low-level `http` module to Express, covering middleware, routing, static files, and template engines.

### What I Did:
- Set up a modular Express.js project with clean folder structure.
- Implemented routing using `express.Router()` in a separate `routes` folder.
- Added global and route-level middleware for logging and error handling.
- Rendered dynamic HTML pages using the **EJS** template engine.
- Served **static files** like CSS from the `public` folder.
- Demonstrated **query parameters** and **URL parameters** in routes.
- Implemented **form handling** with POST requests and data validation.
- Created a **JSON-based user storage system** with persistent data.
- Built a complete CRUD interface for user management.
- Added comprehensive error handling and 404 page fallbacks.

### How It Works:
1. **Entry Point:** The server starts from `server.js` using Express on port 8000.
2. **Routing:** Defined in `routes/mainRoutes.js`:
   - `/` → Home page with navigation links (EJS-rendered)
   - `/about` → About page (EJS-rendered)
   - `/greet?name=John` → Query parameter demo
   - `/user/:id` → URL parameter demo
   - `/form` → Demo form page
   - `/add-user` → User registration form
   - `/users` → Display all registered users in a table
   - `/cause-error` → Error handling demo
3. **Middleware:**
   - `middlewares/logger.js` logs every request with timestamp
   - `middlewares/errorhandler.js` handles errors gracefully
   - Express built-in middleware for static files and form parsing
4. **Views:**
   - EJS templates located in `views/` folder with responsive styling
   - Dynamic content rendering with user data
5. **Data Storage:**
   - JSON-based storage in `data/users.json`
   - Utility functions in `utils/userDb.js` for reading/writing users
6. **Static Files:**
   - CSS and assets served from `public/` directory

### Key Objectives:
- Understand what Express.js is and why it simplifies server logic.
- Learn how to define clean, maintainable routes using `express.Router`.
- Implement custom and global middleware.
- Handle request data through **query strings** and **dynamic URL segments**.
- Use **EJS** to render dynamic HTML.
- Serve static assets like CSS using `express.static`.
- Build a persistent data storage system using JSON files.
- Create a complete user management interface with CRUD operations.

---

### 🧪 Folder Structure

```
celebal-tech-assigments/
├── .git/
├── .gitIgnore
├── README.md
├── files/
├── node_modules/
├── package-lock.json
├── package.json
├── server.js
└── src/
    ├── data/
    │   └── users.json
    ├── middlewares/
    │   ├── errorhandler.js
    │   └── logger.js
    ├── public/
    │   └── index.css
    ├── routes/
    │   └── mainRoutes.js
    ├── utils/
    │   └── userDb.js
    └── views/
        ├── 404.ejs
        ├── about.ejs
        ├── addUser.ejs
        ├── error.ejs
        ├── form.ejs
        ├── index.ejs
        ├── thankyou.ejs
        └── users.ejs
```

---

### 🧪 Test the Server

#### 1. Start the Server
```bash
node server.js
```

#### 2. Test the Routes
Open your browser and visit these endpoints:

**Basic Navigation:**
- `http://localhost:8000/` → Home page with navigation links
- `http://localhost:8000/about` → About page

**Parameter Demos:**
- `http://localhost:8000/greet?name=John` → Query parameter demo
- `http://localhost:8000/user/123` → URL parameter demo

**User Management:**
- `http://localhost:8000/add-user` → Add a new user
- `http://localhost:8000/users` → View all registered users

**Form Testing:**
- `http://localhost:8000/form` → Demo form page

**Error Handling:**
- `http://localhost:8000/cause-error` → Test error middleware
- `http://localhost:8000/nonexistent` → Test 404 page

#### 3. Test with cURL Commands
```bash
# Test form submission
curl -X POST http://localhost:8000/submit \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=John&email=john@example.com"

# Add a new user
curl -X POST http://localhost:8000/add-user \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "name=Alice&email=alice@example.com"
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
After cloning for the first time, you will be inside the main branch which contains a README.md file that will guide you on how to view each week's assignment.

---

## How to Switch Branches
To view the code for a specific week's assignment:
1. Open your terminal.
2. Navigate to the project directory if not already:
   ```bash
   cd celebal-tech-assigments
   ```
3. Switch to the desired branch (example for Week-2):
   ```bash
   git checkout week-2
   ```
   Replace `week-2` with the branch name (e.g., `week-3`, `week-4`).

---

## How to Run the Program
1. Ensure you have Node.js installed. You can verify by running:
   ```bash
   node -v
   ```
   If Node.js is not installed, download and install it from [Node.js official website](https://nodejs.org/).

2. Navigate to the branch directory where the code resides.

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the program:
   ```bash
   node server.js
   ```
   Replace `server.js` with the name of the file containing the main code for the assignment.

5. Open your browser and visit `http://localhost:8000` to see the results. 
   I have used the port 8000, if you want to change it you can change the 
   ```const PORT = 8000;``` in server.js file and accordingly visit the link with your port number to see the results