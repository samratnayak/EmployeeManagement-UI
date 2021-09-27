#Employee management API & UI

Refer to the Design document: EmployeeManagement-UI/EMP-design-doc.pdf

System requirements : 

 - Git
 - Java 8+
 - Maven 3+
 - Node 12+

Steps to Install : 

 1) Clone the repositories in different paths : 
     - https://github.com/samratnayak/EmployeeManagementApi.git (e.x : api/)
     - https://github.com/samratnayak/EmployeeManagement-UI.git (e.x : ui/)
 3) Start the API application
     - Go to Root (api/EmployeeManagementApi/) where pom.xml is present
     - Run `mvn clean install`
     - Now cd target/
     - From command line, run `java -jar EmployeeManagement-0.0.1-SNAPSHOT.jar`
     - On successful startup, explore API Docs: http://localhost:8080/swagger-ui.html
     - To access the in-memory DB, goto http://localhost:8080/h2-console/
     - Copy the jdbc URL from log (it's different for every start-up), input it in 'JDBC URL' field (it's format : jdbc:h2:mem:7c99182f-fa99-42a8-b90f-954150d03e51)
     - Click test connection, on successful, click on connect to connect the DB
 5) Start the UI app
    - Go to UI project root (ui/EmployeeManagement-UI/) where package.json is present
    - Run `npm install`
    - Once it is complete after a few minutes, run `npm start`
    - Hit the browser with URL: http://localhost:3000 
