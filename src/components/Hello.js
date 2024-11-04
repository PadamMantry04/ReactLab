// This is a component to demonstrate working with jsx code and w/o jsx code.

// jsx elements are syntactical sugar for calling createElement

import React, {Component} from 'react'


// using jsx
// const Hello = () => {
//     return (
//         <div className='pm_random'>
//             <h1>Hey, this is just some random text!</h1>
//         </div> // React: !class, use className keywork instead
//     )
// }

// without using jsx
const Hello = ()=>{
    return React.createElement(
        'div',
        {id:'hello'},
        React.createElement(
            'h1',
            {id:'text'},
            'Hey, this is just some random text!'
        )
    );
}


// without using jsx
export default Hello