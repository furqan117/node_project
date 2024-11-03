const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/tasks.json');

exports.writeTasksToFile = (tasks) => {
    fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
};

exports.readTasksFromFile = () => {
    if (!fs.existsSync(filePath)) {
        exports.writeTasksToFile([]); // Initialize with an empty array if file doesn't exist
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
};
