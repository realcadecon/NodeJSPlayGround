import http from 'http';

const server = http.createServer((req, res) => {
    console.log("I received a request");
    const { url } = req;
    if(url === "/Users") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Users</h1>");
    } else if(url === "/About") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>About</h1>");
    } else if(url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h1>Home</h1>");
    }
    res.end();
});

server.listen(3000, () => {
    console.log("server is listening on port 3000");
});