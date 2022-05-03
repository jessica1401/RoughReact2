import React from 'react';
import './box.css'

const Box = (props) => {
    // console.log(props);
    return (<div className='box'>
        <h2 className='box_div'>{props.content}</h2>
        <a href={props.link}>Link to this product</a>
    </div>)
}

export default Box;