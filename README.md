# Todo App with Redux and Local Storage

## Overview

This Todo List application is built with React, Redux, and React Router, allowing users to manage tasks effectively. Key features include state management with Redux, persistence using localStorage, and a clean UI for task management.

## Features

- **Task Management**: Add, edit, delete, and toggle completion of tasks.
- **State Management**: Centralized state using Redux.
- **Persistence**: Local storage integration ensures tasks are saved across sessions.
- **Navigation**: React Router for seamless page transitions.
- **Mock API Integration**: Fetch initial data from JSONPlaceholder API.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/whereismytime/Todo-App-with-Redux-and-Local-Storage.git
   cd Todo-App-with-Redux-and-Local-Storage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Folder Structure

```
Todo-App-with-Redux-and-Local-Storage
├── public
├── src
│   ├── components
│   │   ├── Breadcrumbs.jsx
│   │   ├── EditModal.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── TodoItem.jsx
│   │   ├── TodoList.jsx
│   │   └── TodoSection.jsx
│   ├── pages
│   │   ├── FAQ.jsx
│   │   ├── Home.jsx
│   │   └── TaskDetails.jsx
│   ├── redux
│   │   ├── store.js
│   │   └── todoSlice.js
│   ├── utils
│   │   ├── localStorage.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Usage

### Adding Tasks
1. Enter a task name in the input field.
2. Click "Add Task" to add it to the list.

### Editing Tasks
1. Click "Edit" next to a task.
2. Update the name in the modal and click "Save".

### Deleting Tasks
1. Click "Delete" next to a task to remove it.

### Marking Tasks as Completed
1. Click on the task text to toggle its completed state.

## Technologies Used

- **React**: For building UI components.
- **Redux**: For centralized state management.
- **React Router**: For navigation between pages.
- **localStorage**: To persist tasks.
- **JavaScript**: For scripting.
- **CSS**: For styling the app.

## License

This project is licensed under the MIT License.