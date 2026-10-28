//what is contextAPI
//why need
//how it is solving prop drilling
//three-steps:-create provide consume
//useContext hooks 

// WHAT IS CONTEXT API?

// Definition (Interview Answer)

// React Context API is a feature that allows us to share data across multiple components without passing props manually
//  through each level. It helps solve the problem of prop drilling. We create a context using createContext, provide the 
//  value using a Provider, and access the data in child components using the useContext hook(easy way) and old way( Context.Consumer and render props).

// Simple Explanation
// “In simple words, Context API allows us to store data in a central place and make it available to any component that 
// needs it, no matter how deeply nested it is.”

// **HOW CONTEXT API SOLVES THIS?**

// Context API allows us to **share data directly with the components that need it**, without passing props through
//  intermediate components.

// So instead of sending data step by step, we **provide the data once**, and any component can access it.