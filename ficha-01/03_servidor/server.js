const http = require('http');
const PORT = 3000;
const HOST = 'localhost';

const server = http.createServer((req, res) => {
    if (req.method === "GET") {
        switch (req.url) {
            case '/':
                res.write('Welcome to my server!');
                break;
            case '/about':
                res.write('This is a Node.js server');
                break;
            case '/time':
                const time = new Date().toLocaleString();
                res.write(time);
                break;
            default:
                res.write("Route not found (status 404)");
        }
        res.end();
    }
    
});

server.listen(PORT, HOST, ()  => {
    console.log(`Running on http://${HOST}:${PORT}`);
});