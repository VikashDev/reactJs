// import react to make Component

import React from 'react';

// import react-dom to render html in browser dom
import ReactDOM from 'react-dom';

// creating a Component in React
class Hello extends React.Component {
  render() {
    return(
      <h1>Hello !!</h1>
    )
  }
}

class ReactApp extends React.Component {
  render() {
    return(
      <span> This is first React Hello World Program </span>
    )
  }
}



// Combining two Component in single Component
class WelcomeText extends React.Component {
  render() {
    return(
      <section>
      <Hello /><ReactApp />
      </section>
    )
  }
}


// rendering the html in DOM
ReactDOM.render(<WelcomeText/>, document.getElementById('root'));