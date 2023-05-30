import React, {Component} from "react" 
import "./ChatInput.scss"

// function ChatInput(props) {
//     return (
//         <div className="ChatInput"> 
//             /* onKeyDown is executed when keyboard key is pressed */ 
//             /* this.props.send means that --> here this refers to this class this.props refers to props passed and inside that send is present */ 
//             <input onKeyDown={props.send} placeholder="Type a message....Hit enter to send"></input> 
//         </div>
//     )
// }

class ChatInput extends Component {
    render() {
        return (
            <div className="ChatInput"> 
                {/* onKeyDown is executed when keyboard key is pressed 
                this.props.send means that --> here this refers to this class this.props refers to props passed and inside that send is present */}
                <input onKeyDown={this.props.send} placeholder="Type a message....Hit enter to send"></input> 
            </div>
        )
    }
}

export default ChatInput ;