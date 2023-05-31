import React, {Component, useEffect, useState} from "react";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import "./App.css"
import {connect, sendMsg} from "./api" 
import Header from "./components/Header";

// function App() {
//   const [ChatHistory,setChatHistory] = useState([]) 
  
//   useEffect(() => {
//     connect((msg) => {
//       console.log("New Message") 
//       setChatHistory((prevState) => ({
//         ChatHistory : [...prevState.ChatHistory,msg] 
//       }))
//       console.log(ChatHistory) 
//     }) 
//   })
//   return (
//     <div className="App">
//         <Header /> 
//         <ChatHistory ChatHistory={ChatHistory} /> 
//         <ChatInput send={this.send} /> 
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      chatHistory : [] 
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message") 
      this.setState((prevState) => ({
        chatHistory : [...prevState.chatHistory,msg] 
      }))
      console.log(this.state) 
    });
  }
  send(event) {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }
  render() {
    return (
      <div className="App">
          <Header /> 
          <ChatHistory chatHistory={this.state.chatHistory} /> 
          <ChatInput send={this.send} /> 
      </div>
    );
  }

}

export default App ; 
