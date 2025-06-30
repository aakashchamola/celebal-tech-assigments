# Celebal Tech Assignments
This repository contains my weekly Celebal summer internship assignments. 
Each week's assignment is stored in a separate branch.


## Week-5 Assignment - Working with Databases

The Week-5 assignment focuses on **Working with Databases** and building a comprehensive CRUD application using **MongoDB** and **Mongoose**. This week's goal was to transition from JSON-based storage to a proper database system, implementing advanced database operations, data validation, and query techniques.

### 📚 Learning Objectives:
- **Introduction to Databases** - Understanding NoSQL vs SQL databases and when to use each
- **MongoDB with Node.js** - Using MongoDB as a document database with Mongoose ODM  
- **CRUD Operations** - Create, Read, Update, Delete operations with validation
- **Database Schema Design** - Designing efficient and scalable database schemas
- **Data Validation and Sanitization** - Implementing robust data validation at multiple levels
- **Database Connections** - Managing database connections and handling connection errors
- **Advanced Query Techniques** - Pagination, sorting, searching, filtering, and aggregation
- **Relational Database Concepts** - Understanding relationships and data modeling
- **Database Migrations** - Schema versioning and data migration strategies
- **Performance Optimization** - Indexing, query optimization, and connection pooling

### What I Built:
- Complete **CRUD API** for user management with MongoDB
- **RESTful API endpoints** following industry standards
- **Mongoose schemas** with validation and middleware
- **Database connection management** with proper error handling
- **Advanced querying** with pagination, search, and sorting
- **Soft delete functionality** to maintain data integrity
- **Data validation** at both schema and controller levels
- **Error handling middleware** for database operations

### How It Works:
1. **Database:** MongoDB connection managed through Mongoose ODM
2. **API Architecture:** RESTful API design with proper HTTP methods
3. **Data Model:** User schema with name, email, age, and soft delete functionality
4. **Validation:** Email format validation, required fields, and data sanitization
5. **Error Handling:** Comprehensive error handling for database operations
6. **Query Features:** Search, pagination, sorting, and filtering capabilities

### Key Features Implemented:
- **Create User** - POST `/api/users` with data validation
- **Get All Users** - GET `/api/users` with pagination, search, and sorting
- **Get User by ID** - GET `/api/users/:id` with error handling
- **Update User** - PUT `/api/users/:id` with validation
- **Soft Delete User** - DELETE `/api/users/:id` (marks as deleted instead of removing)
- **Search Functionality** - Search users by name or email
- **Pagination** - Limit results and navigate through pages
- **Sorting** - Sort users by any field (default: createdAt)

---

### 🧪 Folder Structure

```
celebal-tech-assigments/
├── .env                        # Environment variables (MongoDB URI, PORT)
├── .gitIgnore                  # Git ignore file
├── README.md                   # Project documentation
├── package.json               # Node.js dependencies and scripts
├── package-lock.json          # Dependency lock file
├── server.js                  # Main application entry point
├── config/
│   └── db.js                  # MongoDB connection configuration
├── controllers/
│   └── userController.js      # User CRUD operations logic
├── middlewares/
│   └── errorHandler.js        # Global error handling middleware
├── models/
│   └── User.js                # Mongoose user schema and model
└── routes/
    └── userRoutes.js          # RESTful API routes for users
```

---

### 🧪 Test the Server

#### Prerequisites: Install MongoDB Locally

Before running the application, you need to install MongoDB on your system:

**For macOS (using Homebrew):**
```bash
# Install MongoDB Community Edition
brew tap mongodb/brew
brew install mongodb-community@7.0

# Start MongoDB service
brew services start mongodb/brew/mongodb-community

# Verify MongoDB is running
brew services list | grep mongodb
```

**For Windows:**
1. Download MongoDB Community Server from [MongoDB Download Center](https://www.mongodb.com/try/download/community)
2. Install the downloaded `.msi` file
3. Add MongoDB to your system PATH
4. Create the data directory:
```cmd
# Create the data directory
mkdir C:\data\db
```
5. Start MongoDB service:
```cmd
# Start MongoDB service
net start MongoDB

# Or run MongoDB manually
mongod --dbpath "C:\data\db"
```

#### 1. Setup Environment Variables
Create a `.env` file in the project root:
```bash
PORT=8000
MONGO_URI=mongodb://localhost:27017/celebal_week5_crud
```

#### 2. Install Dependencies & Start Server
```bash
# Install project dependencies
npm install

# Start the server
npm start
# or
node server.js
```

You should see:
```
✅ MongoDB connected
🚀 Server running at http://localhost:8000
```

#### 3. Test API Endpoints with cURL

**Create a New User:**
```bash
curl -X POST http://localhost:8000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 25
  }'
```

**Get All Users (with pagination):**
```bash
# Get first 5 users
curl "http://localhost:8000/api/users"

# Get users with pagination and search
curl "http://localhost:8000/api/users?page=1&limit=5&search=john&sort=name"
```

**Get User by ID:**
```bash
curl "http://localhost:8000/api/users/USER_ID_HERE"
```

**Update a User:**
```bash
curl -X PUT http://localhost:8000/api/users/USER_ID_HERE \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Smith",
    "age": 26
  }'
```

**Delete a User (Soft Delete):**
```bash
curl -X DELETE http://localhost:8000/api/users/USER_ID_HERE
```

#### 4. MongoDB Database Verification

Connect to MongoDB to verify data:
```bash
# Connect to MongoDB shell
mongosh

# Switch to your database
use celebal_week5_crud

# View all users
db.users.find().pretty()

# View only active users (not deleted)
db.users.find({isDeleted: false}).pretty()

# Count total users
db.users.countDocuments()
```

#### 5. Environment Configuration

Make sure your `.env` file contains:
```properties
PORT=8000
MONGO_URI=mongodb://localhost:27017/celebal_week5_crud
```

**Note:** Replace `localhost:27017` with your MongoDB connection string if using a cloud database like MongoDB Atlas.

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
   npm start
   # or
   node server.js
   ```

5. **Important:** Make sure MongoDB is running before starting the server.
   - For macOS: `brew services start mongodb/brew/mongodb-community`
   - For Windows: `net start MongoDB`
   - For Linux: `sudo systemctl start mongod`
   - For Docker: `docker start mongodb`

---