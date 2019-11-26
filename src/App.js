import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Counters from './components/counters';
import Counter from './components/counter';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 20 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log('works')
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters
        counters={this.state.counters}
         onReset={this.handleReset}
         onIncrement={this.handleIncrement}
         onDelete={this.handleDelete}
         />
      </main>    
      </React.Fragment>
    );
  }
}

export default App;
