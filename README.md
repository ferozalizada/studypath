# StudyPath

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




## Angular Basic Knowledge

[*.ts]
    Every file ending with .ts is a TypeScript file.
    In .ts files you have TypeScript code with is a superset of JavaScript 
    which primarily provides optional static typing, classes and interfaces.

[*.component.spec.ts] 
   In src/app folder there are *.component.spec.ts files which are files for testing.

[angular cli commands]
    Our objects such as Calendar are in the src/app/components folders
        -> IMPORTANT: create components using Angular Cli with : ng g component components/[name of component]
    Our services such as course-data service are in the src/app/services folders
        -> IMPORTANT: create services using Angular Cli with : ng g service services/[name of service]

[naming convention]
    Follow the most recent Angular naming convention
    It's simple just look at the code already in the project as a guide

[component in html]
    In *.component.ts files put the name of the object in component selector
        Ex :
            @Component({
                selector: 'app-calendar'
                ... }
        Then you can add that object in app.component.html file by putting <app-calendar> tag

[constructor and ngOnInit]
    Note: constructor in *.component.ts files are executed before ngOnInit

[variables in html]
    You can create variables in the class inside *.component.ts files 
        and insert them in html by putting: {{variable name}}

[app.module.ts]
    In app.module.ts file, you need to specify (if not done already):
        declarations: list of components used
        providers: list of services used

[services and components]
    Services should do all the heavy computation and components display/communicate data to html




## What is MongoDB

Basically a MongoDB is a set of collections and documents. 
A collection is a set of documents (similar data grouped together).
And a document is a JSON object.

If you want to compare MongoDB to MySQL,
MySQL 	has :  Tables 	   and rows
MongoDB has :  Collections and documents


## Server setup for MongoDB

Step 1: Install NodeJS on the server, as well as npm

Step 2: Install MongoDB
	- Test if MongoDB is correctly setup by checking if mongod status is: active (running)
	- If MongoDB is correctly setup then typing mongo should open the MongoDB shell (used to create db and others things)
	
Step 3: Create MongoDB database
	- Refer to the MongoDB database setup section below
	
Step 4: Create an app that listen and respond to requests (server side)
	- In this project, the app is in Project/API
	- The app is basically a app.js file that will start the nodejs server and make it listen on port 3000
	- When web makes a request to the app.js, the app.js will transfer the request to the api.js file which is connected to MongoDB
	- When the request is done, api.js will send back the result to the web app
	
Step 5: Angular request to MongoDB
	- Inside the services folder on this project there is a file api-requests.service.ts which makes all the requests to the server to add/get data from the MongoDB.
	
	
## MongoDB database setup

## MongoDB Basic shell commands

[Create database]
To create or switch database type: use [database name]

[Show database]
To view the database created type: db

[Show list of databases]
To view the list of databases created type: show dbs
- If the database created doesn't contain anything then the database will not be displayed on the list

[Delete database]
To delete a database type: db.dropDatabase()

[Create collection]
To create a collection type: db.createCollection("[name of collection]");
Note: Unlike SQL tables, collections don't need to have a predefined structure.
Therefore, each document can have its own structure/properties/fields.

[Insert document]
To insert a document type: db.[name of collection].insert([document]);
Note: if you insert a document in the collection and the collection
	  doesn't exist the collection will be created automatically.

[Show all documents in collection]
To all documents in a collection type: db.[name of collection].find()

## MongoDB NodeJS commands

Refer to this documentation: https://mongodb.github.io/node-mongodb-native/