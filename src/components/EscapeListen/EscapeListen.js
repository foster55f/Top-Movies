import React from 'react';
import { withRouter } from 'react-router-dom';



class EscapeListen extends React.Component {
    constructor(props){
      super(props);
      
      this.state = {currentKey: ''}
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    handleKeyPress(e) {
      this.setState({currentKey: e.keyCode});
      if(e.keyCode === 27) {
        this.props.history.push("/")
      }
    }
    
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    render() {
      return(
        <h2></h2>
      );
    }
  }
  
  export default withRouter(EscapeListen);