//const { readFile } = require('fs').promises;

const fs = require('fs').promises;

const readfile = (filepath)=>{
    return fs.readFile('file.txt','utf8') //return promise

}

readfile('file.txt').then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.error(err);
})