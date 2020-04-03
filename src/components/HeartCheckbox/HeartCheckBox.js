import HeartCheckbox from 'react-heart-checkbox';
import React from 'react';
 
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
 
    onClick = (evnet, props) => {
    this.setState({ checked: !this.state.checked });
  }
 
    render() {
      
    const { checked } = this.state;
 
    return (
        <div className ='heart-container'>
        {this.props.checked &&
            <HeartCheckbox checked={this.props.checked} onClick={this.onClick} />
        }
        </div>
    );
  }
}
export default Demo;