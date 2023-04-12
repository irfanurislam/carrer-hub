import React from 'react';

const Blog = () => {
    return (
        <div>
           <div className="px-8">
      <div className="mt-5 card border-none w-50 bg-base-100">
        <div className="card-body text-lg text-[#111111]">
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">1: What is Context Api</h2>
            <p className="text-lg mt-8">Ans: Context Api is a react structur that when use props drilling components by components pass data that easiest Way use Context Api . When called parents access by all components 
            
                    
                    </p>
         </div>
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">2: What is Custom Hook?</h2>
            <p className="text-lg mt-8"> Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.  thats it</p>
         </div>
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">3: What is UseRef()?</h2>
            <p className="text-lg mt-8">Ans:useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
         </div>
         <div className="text-[#111111] my-5">
            <h2 className="text-2xl font-bold">4: WHat is UseMemo()?</h2>
            <p className="text-lg mt-8"> Ans: useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations  </p>
         </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blog;