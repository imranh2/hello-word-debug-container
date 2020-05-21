const http = require('http');
const os = require('os');

const bindip = '0.0.0.0';
const port = 3000;

const server = http.createServer(async (req, res) => {
  console.log('Request from: ', req.connection.remoteAddress);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  res.write('Hello, world!');
  res.write('\n')

  res.write('\n');
  //Container detail
  //hostname
  res.write('Container Hostname: ');
  res.write(os.hostname());
  res.write('\n');
  //ip
  res.write('Container Network Info: ');
  res.write(JSON.stringify(os.networkInterfaces()));
  res.write('\n');
  res.write('Container IP Guess: ');
  res.write(JSON.stringify(os.networkInterfaces().eth0[0].address));
  res.write('\n');

  res.write('\n');
  //Client detail
  res.write('Client connection IP: ');
  res.write(req.connection.remoteAddress);
  res.write('\n');
  res.write('Client socket IP: ');
  res.write(req.socket.remoteAddress);
  res.write('\n');
  res.write('Client connection.socket.remoteAddress IP: ');
  res.write((req.connection.socket ? req.connection.socket.remoteAddress : "connect.socket unset"));
  res.write('\n');

  res.write('x-forwarded-for: ');
  res.write((req.headers['X-Forwarded-For'] ? req.headers['X-Forwarded-For'] : "Not set"));
  res.write('\n');

  res.write('host: ');
  res.write(req.headers.host);
  res.write('\n');

  //res.write(req.rawHeaders.join());
  //res.end('Hello World');
  //await res.end('') ? process.exit(0) : process.exit(1);
  res.end('');
});

server.listen(port, bindip, () => {
  console.log(`Server running at http://${bindip}:${port}/`);
  console.log('Assuming single eth port which has one IP', os.networkInterfaces().eth0[0].address)
});
