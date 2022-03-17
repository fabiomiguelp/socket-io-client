import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

function App() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
   

    const socket = socketIOClient.connect(ENDPOINT,{
      cors:{
         origin:'http://127.0.0.1:4001'
      }
     });

    socket.on("connection", data => {

      console.log('oii' + data[0]);
    });
  }, []);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
}

export default App;