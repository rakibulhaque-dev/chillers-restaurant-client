// eslint-disable-next-line no-unused-vars
import React from 'react'

function Blog() {
    return (
        <div className='container mx-auto'>
            <h1 className='p-5 mb-8 text-3xl font-bold text-center text-purple-700 rounded-lg shadow-lg bg-slate-200'>Q&A Section</h1>

            <div className='p-5 mb-5 border rounded-lg shadow-lg'>
                <p className='text-red-600'><span className='font-bold'>1. Question:</span> <em>Tell us the differences between uncontrolled and controlled components ?</em> </p>
                <p><span className='font-bold text-green-700'>Answer: </span>
                    <small>Uncontrolled components have their state managed by the browser's DOM, while controlled components have their state managed by React. Uncontrolled components rely on user input to determine their value, whereas controlled components have their value controlled by the application.</small>
                </p>
            </div>
            <div className='p-5 mb-5 border rounded-lg shadow-lg'>
                <p className='text-red-600'><span className='font-bold'>2. Question:</span> <em>How to validate React props using PropTypes ?</em> </p>
                <p><span className='font-bold text-green-700'>Answer: </span>
                    <small>

                    To validate React props using PropTypes, you need to import the library, define PropTypes for your component, and use validators such as string, number, arrayOf, bool, func, object, shape, and others. React will log a warning in the console if a prop is passed that doesn't match its PropTypes definition.
                        
                    </small>
                </p>
            </div>
            <div className='p-5 mb-5 border rounded-lg shadow-lg'>
                <p className='text-red-600'><span className='font-bold'>3. Question:</span> <em>Tell us the difference between nodejs and express js. ?</em> </p>
                <p><span className='font-bold text-green-700'>Answer: </span>
                    <small>Node.js is a runtime environment for running JavaScript outside of the browser, while Express.js is a framework built on top of Node.js for building web applications. Node.js provides core modules for handling file system operations and networking, while Express.js provides additional features for building web applications such as routing, middleware, and templating.</small>
                </p>
            </div>
            <div className='p-5 mb-5 border rounded-lg shadow-lg'>
                <p className='text-red-600'><span className='font-bold'>4. Question:</span> <em>What is a custom hook, and why will you create a custom hook?</em> </p>
                <p><span className='font-bold text-green-700'>Answer: </span>
                    <small>
In React, a custom hook is a JavaScript function that starts with the prefix "use" and allows you to encapsulate and reuse stateful logic between components. A custom hook can be used to extract repetitive logic from components and make it reusable across multiple components.

You might want to create a custom hook when you have a set of stateful logic that you want to reuse across multiple components. By creating a custom hook, you can encapsulate this logic in a single function and easily reuse it across different components without having to repeat the same code. This can help reduce code duplication and make your codebase more organized and maintainable.

Examples of situations where you might want to create a custom hook include handling form inputs, fetching data from an API, managing the state of a component, or handling animations. By creating a custom hook for these types of logic, you can make your code more reusable, modular, and easier to test.</small>
                </p>
            </div>
        </div>

    )
}

export default Blog;
