Practical Day -06
Asynchronous programming 
----------------------------
* asynchronous means that a program does not wait for a task to complete before moving on to the 
   next one

* const fs = require('fs') -This line imports the fs (File System) module in Node.js.
      The fs module allows you to interact with the file system, such as reading or writing files.

* fs.readFile('file.txt', 'utf8', (err, data) => {
    fs.readFile() is used to read the contents of the file file.txt.
    The first argument 'file.txt' is the file name (it must be present in the same directory, or 
    you need to provide the full path).

    The second argument 'utf8' ensures that the file is read as a text file (otherwise, it would 
    return a raw buffer).

    The third argument is a callback function (err, data) => {} that will execute once the file r     eading is completed.

  How It Works
  -------------
  1. fs readFile('file.txt','utf8',callback)
     -Read file.txt asynchronously in UTF-8 encoding
     -Takes a callback function that execute when the file read is complete
   2. CallBack Function((err,data)=>{....})
      -If there an error it prints an error message
      -If successful it prints the file content
  3.  console.log("File reading is done")
    - This executes before the file content is printed bczfile reading is asynchronous

      ![image](https://github.com/user-attachments/assets/9ca1f57c-41b5-4dbf-bf59-902836986d28)
