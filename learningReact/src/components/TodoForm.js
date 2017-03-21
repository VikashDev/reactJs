import React from 'react';

const TodoForm = (props) => {
    return (
        <form onSubmit={props.addTask} >
            <input type='text' 
                value={props.currentTask} 
                onChange={props.updateTask}
                />
                <button type='sunbmit'>Submit</button>
        </form>
    )
}

export default TodoForm;