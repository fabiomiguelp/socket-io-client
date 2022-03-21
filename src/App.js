import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
const ENDPOINT = "http://localhost:4001";

const socket = io(ENDPOINT);
socket.on('connect', () => console.log('connected to backend id: ' + socket.id));

function App() {
  const [message, updateMessage] = useState([]);
 
  useEffect(() => {

 
          socket.on('insert', data => {
            updateMessage(data);
            console.log(data[0].id);
         });

  }, [message]);

  return (
    <div>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="large" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="center">Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {message.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.order_item_id}
              </TableCell>
              <TableCell align="right">{row.order_item_name}</TableCell>
              <TableCell align="center"><Button variant="contained" size="large">Pronto</Button><Button variant="contained" size="large">Cancelar</Button></TableCell>
            </TableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>





  );
}

export default App;