const http = requere('http');
const taskRoutes = require("../routes/taskRoutes");

const HOSTNAME = 'localHost'
const PORT = 9000


const server = http.createServer((res, res) =>{
    if (req.url.startWith('/tasks')) {
        taskRoutestes(req, res)
    } else {
        res.writeHead(404, 'not found', {'content-type': 'application/json'})
        res.end(json.stringify({
            message: 'sorry, you got lost!' 
        }))
    }
});

server.listen(PORT, HOSTNAME, () => {
    console.log('server running on port ${PORT}')
})

