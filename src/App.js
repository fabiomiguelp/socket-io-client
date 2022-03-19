import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

const socket = io(ENDPOINT);
socket.on('connect', () => console.log('connected to backend id: ' + socket.id));

function App() {
  const [message, updateMessage] = useState([]);
 
  useEffect(() => {

 
          socket.on('insert', data => {
            updateMessage([...message, data]);
            console.log(data[0].id);
         });

  }, []);

  return (
    <p>

    </p>
  );
}

export default App;