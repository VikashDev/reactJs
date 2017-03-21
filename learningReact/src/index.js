import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItems from './components/TodoItem.js';

class TodoList extends React.Component {
    constructor() {
        super();
        this.changeStatus = this.changeStatus.bind(this);
        this.state = {
            tasks: [
                {name: 'buy Milk', completed : false},
                {name: 'buy Egg', completed : false},
                {name: 'buy Paper', completed : false}
                ]
            }
        }

        changeStatus(index) {
            var tasks = this.state.tasks;
            var task = tasks[index];
            task.completed = !task.completed;
            this.setState({
                tasks: tasks
            })
            
        }

    render() {
        return(
            <ul>
                {
                    this.state.tasks.map((task, index) => {
                    return <TodoItems key={task.name} clickHandler={this.changeStatus} index={index} details={task} />
                    })                
                }
            </ul>
        )
    }
}



ReactDOM.render(<TodoList /> , document.getElementById('root'));