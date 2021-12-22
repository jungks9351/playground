import React from 'react';

class Age extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>나이 : {this.props.age}</div>;
  }
}

export default Age;
