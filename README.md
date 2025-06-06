# Celebal Tech Assignments

This repository contains my weekly Celebal summer internship assignments. 
Each week's assignment is stored in a separate branch.

## Week-1 Assignment
The Week-1 assignment involves setting up a Node.js environment and creating a simple "Hello World" application using the built-in `http` module. 
The application runs a server that listens on a specified port and responds with "Hello World" when accessed via a browser.


### Key Objectives:
- Install Node.js and understand its runtime environment.
- Create a basic HTTP server using Node.js.
- Learn how to run and test the application locally.


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