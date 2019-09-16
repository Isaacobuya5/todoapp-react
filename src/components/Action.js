import React from 'react';
//use function components for component that do not have state
const Action = (props) => {
    return (
    <div>
          <button onClick={props.handlePick}>What should i do?</button>
    </div>  
    )
}

export default Action;