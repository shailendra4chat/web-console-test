let express = require('express');
let app = express();
let path = require('path');
const fs = require('fs');

const port = process.env.DASHBOARD_AUTOMATION_APP_PORT || "4000";

app.use(express.static(path.join(__dirname+'/../reports')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/../reports/index.html'));
});

let reportFiles = [], filePath = path.join(__dirname, '/../reports/');

fs.readdir(filePath, (err, files) => { 
    if (err){
        console.log(err);
    } else {
        files.forEach(file => {
            if (path.extname(file) == ".html" && file !== "mochawesome-bundle.html" && file !== "index.html") {
                reportFiles.push(file);
            }
        }) 
    } 
}) 

app.get('/files', function(req, res) {
    res.send(reportFiles);
});

console.log('App is listening on port ' + port);

app.listen(port);