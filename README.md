IT2234 Practical Day 05 - 24/03/2025

Building RESTful APIs

In this example, We create a RESTful API that manages a list of students. The API allows performing various actions such as retrieving all students, searching for a student by registration number, filtering students by gender, name, or course, etc.

Explanation of Routes: GET /stu - Returns all the students in the database.
![image](https://github.com/user-attachments/assets/51752508-8045-446d-9e96-bff981bcd574)

GET /stu/:id - Fetches the details of a student by their registration number. Returns a 404 error if the student is not found
![image](https://github.com/user-attachments/assets/2e16cc53-26dd-4995-b757-0f99f2e6ec79)

GET /gender/:gen - Filters and returns students based on their gender. image
![image](https://github.com/user-attachments/assets/354c2893-0d11-4efc-9bec-013e7abc6037)

GET /name/:name - Filters and returns students based on their name. image
![image](https://github.com/user-attachments/assets/5c187859-8320-41a7-b0f8-a0a265f68b5b)


Testing: To test this API, you can use Postman:

Send a GET request to 127.0.0.1:3001/stu to see all students.

Send a GET request to 127.0.0.1:3001/stu/{id} (replace {id} with an actual registration number) to see a specific student.

Send GET requests to 127.0.0.1:3001/gender/{gen}, 127.0.0.1:3001/name/{name}, or 127.0.0.1:3001/course/{course} to filter students based on gender, name, or course.
