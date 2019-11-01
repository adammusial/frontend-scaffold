import React from 'react';
import Greeting from './components/Greeting/Greeting';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends React.Component {
  state = {
    name: 'there',
  };

  render() {
    const { name } = this.state;

    return (
      <ErrorBoundary>
        <div className="App">
          <Greeting name={name} />
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
