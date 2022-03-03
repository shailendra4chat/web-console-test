const fs = require('fs');
let path = require('path');

// dashboard-dd-mm-yyyy-hh-mm.html

let d = new Date()

let dt = d.getDate(), mn = d.getMonth() + 1, yr = d.getFullYear(), hrs = d.getHours(), min = d.getMinutes();
         
let fileName = "dashboard-" + dt + "-" + mn + "-" + yr + "-" + hrs + "-" + min + ".html";

let fileNamePath = path.join(__dirname, '/../cypress/reports/html/' + fileName);

fileNamePath = fileNamePath.toString();

fs.createReadStream(path.join(__dirname, '/../cypress/reports/html/mochawesome-bundle.html')).pipe(fs.createWriteStream(fileNamePath));