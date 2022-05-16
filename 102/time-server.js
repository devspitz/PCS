const net = require('net');

const server = net.createServer(function listener(socket) { 
   //sock logic 
    let date = newDate();
    let yr = date.getFullYear();
    let month = date.getMonth() // starts at 0
   let dateOfMonth = date.getDate() // returns the day of month
    let hours= date.getHours()
    let minutes = date.getMinutes()
 let data = (yr, '-', month,'-',dateOfMonth, ' ', hours, ':',minutes);
    socket.write(data);
    socket.end(data)
})
server.listen(process.argv[2]);