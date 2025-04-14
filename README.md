# Task Manager Application

https://youtu.be/SEPqFsn8A3M

A full-stack task management application built with Node.js, Express, PostgreSQL, and EJS templates.

## Features

- Add new tasks with title, description and priority
- Mark tasks as complete/incomplete
- Delete individual tasks
- Delete all tasks at once
- Responsive design with clean UI

## Technologies Used

- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Frontend**: EJS templates, CSS
- **Package Manager**: npm

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up PostgreSQL database:
- Create a database named 'taskmanager'
- Update the connection details in `.env` file

4. Run the application:
```bash
npm start
```

## Project Structure

```
├── app.js            # Main application entry point
├── routes/           # Route definitions
├── controllers/      # Business logic
├── views/            # EJS templates  
├── hs/               # Static files (CSS)
└── README.md         # Project documentation
```

## db
data.sql
tables.sql


MIT
