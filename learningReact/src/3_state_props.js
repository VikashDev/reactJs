// Here we are learing the state & props
// State - Hold data for the component 
// props - Render the data which will be passed into it
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// parent todoApp for the App
class TodoApp extends React.Component {
    constructor() {
        super();
        // state is used to hold data for the Component
        // state is keyword
        this.state = {
            names : ['vikash','kumar','React']
        }
    }

    render() {
        return(
            <ul>
                {
                    // map function is done because we have to return an array
                    // array cant be retrun from for loops
                    this.state.names.map(function(name) {
                    // here we are passing the array vlaues to the TodoApp Component
                    // unique key has to be given in the component, otherwise it will send error
                    return <TodoItem key={name} detail={name} />
                    })
                }
              </ul>
        )
    }
}

// child todoApp which is used for the templete to iterate though it
class TodoItem extends React.Component{
    render() {
        return (
            <li>
                {this.props.detail}
            </li>
        )
    }
}


ReactDOM.render(<TodoApp /> , document.getElementById('root'));    