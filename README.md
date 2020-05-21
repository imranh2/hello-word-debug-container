# hello-world-debug-container

I got fedup of trying to find a samll simple container that I could curl to give me some basic info about myself and the 
container.

Simple NodeJS app that binds to all IPv4 addresses on 3000 that spits out some useful info when debugging container platforms

`docker.pkg.github.com/imranh2/hello-world-debug-container/hello-world-debug:latest`

Currently spits out to the client:

```
Hello, world!

Container Hostname: <container hostanme>
Container Network Info: <JSON object >
Container IP Guess: <first ip of eth0>

Client connection IP: <client connection IP>
Client socket IP: <client socket IP>
Client connection.socket.remoteAddress IP: <client connection.socket IP>
x-forwarded-for: <value of the x-forwarded-for header>
host: <value of the host header>
```


Currently spits out to stdout:

```
Server running at http://0.0.0.0:3000/
Assuming single eth port which has one IP <first ip of eth0>
Request from:  <client connection IP>
```
