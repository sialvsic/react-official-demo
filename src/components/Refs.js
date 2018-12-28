import React, { Component } from 'react';

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ ref } className="FancyButton" onClick={ props.onClick }>
    {props.children}
  </button>
));

const ref = React.createRef();

class Refs extends Component {
  constructor() {
    super();
  }

  onClick() {
    console.log(ref.current);
  }

  render() {

    return (
      <div>
        <h3>Refs</h3>
        <FancyButton ref={ ref } onClick={ this.onClick }>Click me!</FancyButton>;
      </div>
    );
  }
}

export default Refs;
