import React from "react";


const Blog = () => {
  return (
    <div className="mb-5 pb-5">
      <div className="text-center mt-4 mx-5 border rounded p-5 mb-5 bg-light shadow">
        <div>
          <h5 className="fw-bold">Question: 1</h5>
          <h2 className="fw-bolder">When should you use context API?</h2>
        </div>
        <div className="text-start mt-4">
          <p>
            {" "}
            Context API is mainly used when data needs to be accessed by many
            components at different nesting levels. We should use it carefully
            because it makes component reuse more difficult. Context API allows
            one to share state across the entire app or part of it lightly and
            with ease.
          </p>
          <p>
            Context API can solve many problems that modern applications face,
            related to state management, for example, props drilling. Many
            solutions can solve state management issues and props drilling, but
            they may increase your build size and compromise your app
            performance. Context API is a React built-in feature, so we do not
            have to worry about performance overhead and library installing
            issues. The props drilling problem occurs when you pass a prop
            somewhere down the tree. When a project grows, data passing through
            props becomes chaotic, making the code more vulnerable and complex.
            To tackle this problem, we use Context API.
          </p>
        </div>
      </div>
      {/* q2 */}
      <div className="text-center mt-4 mx-5 border rounded p-4 bg-light shadow">
        <div>
          <h5 className="fw-bold">Question: 2</h5>
          <h2 className="fw-bolder">What is a custom hook?</h2>
        </div>
        <div className="text-start mt-4">
          <p>
            Custom Hook is a JavaScript function which we create by ourselves,
            when we want to share logic between other JavaScript functions. It
            allows you to reuse some piece of code in several parts of your app.
          </p>
          <p>
            In React, a custom Hook is a function that starts with the word
            “use” and may call other Hooks.
            </p>
            <p>
              The general rules of React Hooks also apply to custom Hooks; these
              include:
            </p>
            <ul>
              <li>
                Only call Hooks at the top level. Do not call Hooks inside
                loops, conditions, or nested functions
              </li>
              <li>Only call Hooks from React function components</li>
              <li>Do not call Hooks from regular JavaScript functions</li>
            </ul>
            <p>
            There is only one other valid place to call Hooks, your own custom
            Hooks. These rules are in place because React relies on the order in
            which Hooks are called to associate the Hooks with a certain local
            state. Placing a Hook inside conditions may change this order,
            resulting in the subsequent Hooks failing to be called, and more
            likely than not, resulting in bugs.
          </p>
        </div>
      </div>
      {/* q-3 */}
      <div className="text-center mt-4 mx-5 border rounded p-4 bg-light shadow">
        <div>
          <h5 className="fw-bold">Question: 3</h5>
          <h2 className="fw-bolder">What is useRef?</h2>
        </div>
        <div className="text-start mt-4">
          <p>
            One of the various hooks included in React is the useRef hook. It is
            used to reference an object inside a functional component and
            preserves the referenced object's state between re-renders. useRef
            has a property called "current" used to retrieve the value of the
            referenced object at any time while also accepting an initial value
            as an argument. You can change the value of a referenced object by
            updating the current value.
          </p>
        </div>
      </div>
      {/* q-4 */}
      <div className="text-center mt-4 mx-5 border rounded p-4 bg-light shadow">
        <div>
          <h5 className="fw-bold">Question: 4</h5>
          <h2 className="fw-bolder">When should you use context API?</h2>
        </div>
        <div className="text-start mt-4">
        <p>
        useMemo is a built-in React hook that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed. In our example below we have an expensive function called computeLetterCount (for demo purposes we make it slow by including a large and completely unnecessary loop). When the current selected word changes you'll notice a delay as it has to recall computeLetterCount on the new word. We also have a separate counter that gets incremented every time the increment button is clicked. When that counter is incremented you'll notice that there is zero lag between renders. This is because computeLetterCount is not called again. The input word hasn't changed and thus the cached value is returned. 
        </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
