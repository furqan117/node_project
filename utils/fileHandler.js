const fs = require('fs');
const path = require('path')

const filePath = './data/tasks.json';

exports.writeTasksTofile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks))
}
exports.readTasksFromFile = () => {
    if(!fs.existsSync(filePath)) {
        writeTasksTofile([])
    }

    const data = fs.readFileSync(filePath);
    return JSON.parse(data)
}