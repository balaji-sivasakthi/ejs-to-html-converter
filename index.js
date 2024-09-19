const fs = require('fs');

const files = fs.readdirSync(__dirname+"/views")
files.forEach(file=>{
    // Renames HTML files to EJS format.
    if(file.includes('.html')){
        let oldFileName = file.split('.')[0];
        fs.renameSync(`${__dirname}/views/${oldFileName}.html`,`${__dirname}/views/${oldFileName}.ejs`)
    }
})
