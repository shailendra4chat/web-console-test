const fs = require('fs');
let path = require('path');

// count_dashboard-dd-mm-yyyy-hh-mm.html

let count;

fs.readFile(path.join(__dirname+'/../reports/count.txt'), 'utf8', function(err, data) {
    if (err) {
        console.log("Unable to read count.")  
        return
    }
    count = data; // no of reports

    let d = new Date()

    let dt = d.getDate(), mn = d.getMonth() + 1, yr = d.getFullYear(), hrs = d.getHours(), min = d.getMinutes();
            
    let fileName = count + "_dashboard-" + dt + "-" + mn + "-" + yr + "-" + hrs + "-" + min + ".html";

    let fileNamePath = path.join(__dirname, '/../cypress/reports/html/' + fileName);

    fileNamePath = fileNamePath.toString();

    fs.createReadStream(path.join(__dirname, '/../cypress/reports/html/mochawesome-bundle.html')).pipe(fs.createWriteStream(fileNamePath));

    let newCount = parseInt(count) + 1; // Save no of reports

    fs.writeFile(path.join(__dirname+'/../reports/count.txt'), newCount, err => {
        if (err) {
            console.log("Unable to write count.")  
            return
        }
    })    
});