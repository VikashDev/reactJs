import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// writing css class as className
// can write js using { code... }
// one Component can return on sigle html tag other wise it will be error


class HelloWorld extends React.Component {
    // constructor method
    constructor() {
        super();
        this.name = 'Vikash';
    }

    // creating js expression to be called in return

    getName() {
        return "Hello World";
    }




    render() {
        return(
            <div>

              { this.name}  
              { this.getName()}
              <p className='color'>
                  Hello World; 
                  </p>
                </div>
        )
    }
}

ReactDOM.render(<HelloWorld /> , document.getElementById('root'));