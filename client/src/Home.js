import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { storedData: props.storedData };
  }
  render() {
    return (
      <div>
        This is Home {this.state.storedData}
      </div>
    )
  }
}

export default Home;
