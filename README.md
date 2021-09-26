#Employee management API & UI

System requirements : 

 - Git
 - Java 8+
 - Maven 3+
 - Node 10+

Steps to Install : 

 1) Clone the repositories : 
     - https://github.com/samratnayak/EmployeeManagementApi.git
     - https://github.com/samratnayak/EmployeeManagement-UI.git
 3) Start the API application
     - Go to Root where pom.xml is present
     - Run `mvn clean install`
     - Now cd target/
     - From command line, run `java -jar EmployeeManagement-0.0.1-SNAPSHOT.jar`
     - On successful startup, explore API Docs: http://localhost:8080/swagger-ui.html
 5) Start the UI app
    - Go to UI project root where package.json is present
    - Run `npm install`
    - Once it is complete after a few minutes, run `npm start`
    - Hit the browser with URL: http://localhost:3000 
 
