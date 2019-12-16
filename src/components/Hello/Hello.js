import React from 'react';

class Hello extends React.Component {

  state = {
    age:25,
    text: 'barev'
    //age:this.props.test("test")
  };

  getTitle = () => {
    this.setState((oldState) => {
      const {test} = this.props;
      return {
        text:oldState.text = this.props.test('hello')

      }
    });
  };
  PlusAge = () => {
    this.setState((oldState) => {
      return {
        age:oldState.age + 1
        //text:oldState.text - 1
      }
    });
  };

  render() {

    const { age } = this.state;
    const { text } = this.state;
    
    return (
      <div>
        <h1>{age}</h1>
        <h1>{text}</h1>
        <button className="btn btn-warning" onClick={this.getTitle}>get title</button>
        {/*<button className="btn btn-warning" onClick={(e) => this.getTitle(e)}>get title</button>*/}
        <button className="btn btn-primary" onClick={this.PlusAge}>Plus age</button>
      </div>
    )
  }
}

export default Hello
