### 1. What is JSX, and why is it used?

- JSX(JavaScript XML) is a syntax extension for JavaScript that is used to write HTML like code in JavaScript files. It is commonly used with React, a JavaScript library for building user interfaces.

### 2. What is the difference between State and Props?

- State manages a components internal data that we can change over time. It is internal and changeable.
- Props are read-only inputs which is a way to pass the data or properties from the parent component to child component.

### 3. What is the useState hook, and how does it work?

- `useState` is a react function that allows functional components to manage state, which is data that can change over time and trigger re-renders.

```js
const [count, setCount] = useState(0);
```

### 4. How can you share state between components in React?

- Sharing state between components in react can be achieved through several methods, but the one we are familiar with is the `Lifting State Up`, where we move the state and it's corresponding functions from the child components to the parent. Other methods are React Context API, State Management Libraries and Custom Hooks like useState.

### 5. How is event handling done in React?

- Event handling in React is similar to handling events in HTML, but the key differences is in the syntax and implementation. For example,

```html
<button onclick="{handleClick}">Click Me</button>
```
