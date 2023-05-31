import React, {Component, useEffect, useState} from "react";
import Header from "./components/Header/Header";
import ChatHistory from "./components/ChatHistory/ChatHistory";
import ChatInput from "./components/ChatInput/ChatInput";
import "./App.css"
import {connect, sendMsg} from "./api" 


function App() {
  const [ChatHistory,setChatHistory] = useState([]) 
  
  useEffect(() => {
    connect((msg) => {
      console.log("New Message") 
      setChatHistory((prevState) => ({
        ChatHistory : [...prevState.ChatHistory,msg] 
      }))
      console.log(ChatHistory) 
    }) 
  })
}

class App extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      ChatHistory : [] 
    }
  }

  componentDidMount() {
    connect((msg) => {
      console.log("New Message") 
      this.setState((prevState) => ({
        ChatHistory : [...prevState.ChatHistory,msg] 
      }))
      console.log(this.state) 
    });
  }
  render() {
    return (
      <div className="App">
          <Header /> 
          <ChatHistory ChatHistory={this.state.ChatHistory} /> 
          <ChatInput send={this.send} /> 
      </div>
    );
  }

}

export default App ; 