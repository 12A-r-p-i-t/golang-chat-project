var socket = new WebSocket('ws://localhost:9000/ws')

let connect = (cb) => {
    console.log("connecting") 

    socket.onopen = () => {
        console.log("Successfully Connected") 
    }

    socket.onmessage = (msg) => {
        console.log("Message from Websocket",msg) ;
    }

    socket.onclose = (event) => {
        console.log("Socket closed connection",event)
    }

    socket.onerror = (error) => {
        console.log("socket error: ",error)
    }
};

let sendMsg = (msg) => {
    console.log("Sending msg",msg)
    socket.send(msg)
}

export {connect,sendMsg} ; 