const WebSocket = require('ws');
var os = require( 'os' );
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

var ifaces = os.networkInterfaces( );
console.log(JSON.stringify(ifaces));
var arr = ifaces['Ethernet']
var ip = arr[1].address;
console.log('IP Address: '+ip);

/*ifname="Ethernet"
// Object.keys(ifaces).forEach(function (ifname) {
//     var alias = 0;
var ipAddress;
    ifaces[ifname].forEach(function (iface) {
      if ('IPv4' == iface.family) {
        ipAddress=iface.address;
        console.log(iface.address);
      }
    });
  
    console.log(typeof ipAddress);*/



const wss = new WebSocket.Server({port: 3030, host : ip});
wss.on('connection',function connection(ws){
    console.log('Establishing connection...\n')
    ws.on('message',function incoming(data){
        console.log('Inside Message...\n')
        wss.clients.forEach(function each(client){
            console.log('Inside Client...\n')
            if(client!==ws && client.readyState === WebSocket.OPEN){
                console.log('Sending Data: \n'+data)
                client.send(data);
            }
        })
    })
})