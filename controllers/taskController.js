const { IncomingForm } = require('formidable');
const { readTasksFromFile, writeTasksToFile } = require("../utils/fileHandler");
const { copyFileSync } = require('fs');
const path = require('path');

exports.getTasks = (req, res) => {
    const tasks = readTasksFromFile();
    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(tasks));
};

exports.createTask = (req, res) => {
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.writeHead(400, { 'content-type': 'application/json' });
            res.end(JSON.stringify({ message: 'Error parsing form' }));
            return;
        }

        if (!fields.title) {
            res.writeHead(400, { 'content-type': 'application/json' });
            res.end(JSON.stringify({ message: 'Title is required' }));
            return;
        }

        const tasks = readTasksFromFile();
        const newTask = {
            id: Date.now(),
            title: fields.title,
            description: fields.description || '',
            status: fields.status || 'pending',
            image: files.image ? `/uploads/${files.image[0].originalFilename}` : null,
        };

        tasks.push(newTask);
        writeTasksToFile(tasks);

        if (files.image) {
            copyFileSync(files.image[0].filepath, path.join(__dirname, '../uploads', files.image[0].originalFilename));
        }

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(newTask));
    });
};

