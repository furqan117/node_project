const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskControlers");

const taskRoutes = (req, res) => {
    if(req.method = 'GET') {
        getTasksASKS(req, res);
    } else if(req.method = 'POST') {
        createTaskTask(req, res)
    } else if(req.method = 'PATCH') {
        updateTask(req, res)
    } else if(req.method = 'DELETE') {
        deleteTask(req, res)
    } else {
        res.writeHead(404, 'data not found', {'content-type': 'application/json'})
        res.end(json.stringfy({
            message: "unknown method required."
        }))
    }
}

module.exports = taskRoutes;

