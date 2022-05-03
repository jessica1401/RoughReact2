import React from 'react';
import './App.css'
import Box from './Box';

const App = () => {
    const myname = "Jessica";
    const jAge = 21;
    const sAge = 20;
    return (
        <>
        <h1>this is headings</h1>
        <p className="para">My name is {myname}</p>
        <p>My age is {21 + 20}</p>
        <p>{`Jessica's age is ${jAge} and sanohit's age is ${sAge}`}</p>
        <Box content="This is box 1" link='https://excalidraw.com/' />
        <Box content="this is box 2" link='https://www.programiz.com/javascript/online-compiler/' />
      </>
    )
}

export default App;