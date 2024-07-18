import React from 'react';

class LifecycleDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Component is being constructed');
  }

  componentDidMount() {
    console.log('componentDidMount: Component has been mounted');
    // Simulating an API call
    this.timer = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate: Component updated');
    console.log('Previous state:', prevState.count);
    console.log('Current state:', this.state.count);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: Component will be unmounted');
    clearInterval(this.timer);
  }

  render() {
    console.log('Render: Component is rendering');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default LifecycleDemo;
