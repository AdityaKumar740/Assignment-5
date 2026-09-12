# DevStack Builder

A modern React + Vite project for building your own development technology stack.

DevStack Builder helps developers explore technologies, compare categories, and create a personalized stack by adding or removing tools from a visual technology card grid.

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- React Toastify
- Local JSON data

## Features

1. Browse technology cards by category with a polished UI.
2. Build a personalized stack by adding technologies and removing them individually or all at once.
3. Receive toast notifications for add, remove, duplicate, and clear-stack actions.

## Project Flow

The app loads technology information from a local JSON file and presents it as technology cards. Users can add technologies to their selected stack, and the stack panel updates live.

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a JavaScript syntax that looks like HTML. It lets React write UI in a simple visual form while still using JavaScript logic.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is local data inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` creates a reactive variable inside a component. In this project, I used it to store the selected stack array and keep track of the chosen technologies.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs after a component is rendered and is useful for side effects such as loading data. I used it to load the local JSON file for the technologies and to show a loading state before the cards render.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` prop helps React identify each item in a list so it can update, remove, or render correctly without mixing up items.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition. In this project, the `YourStack` component shows an empty stack message when no technologies are selected and shows the selected technologies list otherwise.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child with props, such as `technology`, `isSelected`, and `onAdd`. A child sends information back to the parent by calling a function that the parent passed through props, such as `onAdd(technology)` or `onRemove(id)`.
