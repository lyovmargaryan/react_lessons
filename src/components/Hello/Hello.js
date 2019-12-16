import React from 'react';

class Hello extends React.Component {


  render() {
    const {test} = this.props;
    console.log(test);
    //console.log(this.props.test);
    return (
      <h1>Helloooooo</h1>
    )
  }
}

export default Hello
