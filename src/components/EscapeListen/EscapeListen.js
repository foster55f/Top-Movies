// class ActionPanel extends React.Component {
//     constructor(props){
//       super(props);
//       this.escFunction = this.escFunction.bind(this);
//     }
//     escFunction(event){
//       if(event.keyCode === 27) {
//         //Do whatever when esc is pressed
//       }
//     }
//     componentDidMount(){
//       document.addEventListener("keydown", this.escFunction, false);
//     }
//     componentWillUnmount(){
//       document.removeEventListener("keydown", this.escFunction, false);
//     }
//     render(){
//       return (   
//         <input/>
//       )
//     }
//   }