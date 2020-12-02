const net = require('net');

const connect = function() {
    const conn = net.createConnection({ 
      host: '135.23.222.131',
      port: 50542
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    conn.on("data", (data) =>{
        console.log(data);
    })
    conn.on('connect', () =>{
        console.log("Successfully connected to game server");
    });
    conn.on('connect', () => {
        conn.write('Name: CTY');
        // conn.write("Move: up");
      });
    //setTimeout(() =>{conn.write('Move: up')}, 300);
   

    // setInterval(()=>{conn.write('Move: up')}, 50);
      

   
    
    return conn;
  }
  
  
  module.exports = {connect};