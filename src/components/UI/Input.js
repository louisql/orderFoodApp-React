import React from "react";

import classes from  "./Input.module.css";

const Input = React.forwardRef((props, ref) =>{
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id} >{props.label}</label>
            <input {...props.input}   ref={ref} />
            {/* {...props.input} is being used to add automatically props (all keys and their values)  */}
        </div>
    )
})

export default Input