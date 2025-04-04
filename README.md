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


2. Prmosies
---------------------
* A Promise is a  object that represents an operation that will complte in the future.
* Normally, fs.readFile() uses callbacks, but fs.promises provides Promise-based file operations.
  Now, fs.readFile() returns a Promise, which can be handled using .then() and .catch().

*A Promise has 3 possible states:
 1. Pending /waiting - The operation is still in progress.
 2. Resolved / Fulfill - The operation was successful, and we have a result.
 3. Rejected /error - The operation failed, and we have an error.

*How IT Work
-------------
fs.readFile() returns a Promise.
If the file is read successfully, .then() prints the content.
If an error occurs (e.g., file not found), .catch() handles the error.

![image](https://github.com/user-attachments/assets/7dc4b73e-c4a5-4bea-aa6f-186483356226)


3.Async/await
----------------
* async function: Declares a function that returns a Promise.
* await keyword: Waits for the Promise to resolve before moving to the next line.
How It Work
------------
1. fs.readfile() return a promise
2. await waits for the file to be read before moving forward
3. The try ....catch block handles errors

   Promise.allSettled
   ----------------------
   It waits for all promises to complete(either fulfilled or rejected
   It does not stop if one promise fails

   How It work
   --------------
   1. Both fs.readFile('file.txt') and fs.readFile('data.txt') start running at the same time
   2. Promise.allsettled() waits for both to finish
   3. It return an array with:
      {status: "fulfilled", value: "file content"} if successful
      {status:"rejected", reason:Error } if failed
   4.The program does not stop if one operation fails

 ![image](https://github.com/user-attachments/assets/f6cc1d95-320f-4959-ab29-b1b6b7b59ffe)

      












