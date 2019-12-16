import React from 'react';

class Hello extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     age: 25
  //   }
  // }
  state = {
    age:25,
    text: 'barev'
    //age:this.props.test("test")
  };

  getTitle(){
    this.setState((oldState) => {
      const {test} = this.props;
      return {
        text:oldState.text = this.props.test('hello')

      }
    });
  }
  PlusAge(){
    this.setState((oldState) => {
      return {
        age:oldState.age + 1
        //text:oldState.text - 1
      }
    });
  }

  render() {

    const { age } = this.state;
    const { text } = this.state;

    //console.log(this.props.test);
    return (
      <div>
        <h1>{age}</h1>
        <h1>{text}</h1>
        <button className="btn btn-warning" onClick={this.getTitle.bind(this)}>get title</button>
        <button className="btn btn-primary" onClick={this.PlusAge.bind(this)}>Plus age</button>
      </div>
    )
  }
}

export default Hello
