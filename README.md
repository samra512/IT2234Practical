Index.js
---------------
1.  - The Entry Point
This file acts as the main "door" to your application. It:

Purpose:
This is where your application starts. Any client (like Postman or a browser) interacts with this file first when making requests.

studentrouter.js
--------------------
2.  - The Router
This file handles specific routes (URLs) related to "students". It:

Purpose:
This organizes the routes for your application in a clean, modular way. It acts as the "traffic controller," deciding which function to call based on the request.

3.studentservice - The Data Handler
-----------------------------------------
This file contains the business logic. It:

Purpose:
This file handles all the logic for retrieving and manipulating the student data. It keeps the data-related logic separate, making your app more organized and easier to maintain.

4.  studentdb.js- The Data Store
 --------------------------------
This is where the student data is stored as an array of objects. Each object represents a student with details like , , , , and .
Purpose:
This acts as your app's "database" (for now, it's just a file with sample data).

How They Work Together:
  1.when the client makes a request (ex:GET/student) the server in index.js receive it
  2. The request is passed to studentroute.js which check the route and determine what action to 
    take
  3. studentroute.js call the appropriate function in studentservice.js to fetch the data
  4.studentservice.js retrieve the data from studentdb.js and return it to studentroute.js
  5.studentroute.js send the data back to the client as a response
output:
To retrieve all students data: localhost:3001/student
![image](https://github.com/user-attachments/assets/bd23408d-7f3e-438a-bf86-a48ea1121aff)

To retrieve students data (ByGender): localhost:3001/student/gender/Male
![image](https://github.com/user-attachments/assets/e702f044-ba72-4f39-8e85-36d6d58c961a)


To retrieve students data (ById): localhost:3001/student/id
![image](https://github.com/user-attachments/assets/e1802d9c-78de-465e-b690-09f53e8a916e)

