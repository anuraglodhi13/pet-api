# pet-api

### This API have 5 features

* A POST route "/api/pet" to add pets from an excel file
* A GET route "/api/pet" to get all the pets in the database
* A GET route "/api/pet/`<petId>`" to get a specific pet (petId will be a dynamic value eg. /api/pet/abc123)
* A PATCH route "/api/pet/`<petId>`" to update the details of a specific pet
* A DELETE route "/api/pet/`<petId>`" to delete a specific pet

### Let's see how to setup this api in **local**

Before setting up this package in local make sure to clone this repository.

After cloning the repo follow these steps :- 

In your local just do npm start and it will listen the server on 1000 port.

http://localhost:1000 This will show welcome to PET APP
We can check the API using **postman** for different method :-

1. **POST METHOD** :-  http://localhost:1000/api/pet This will add the details of pet into monogo db according to test.xslx file.
2. **GET METHOD** :- http://localhost:1000/api/pet This will show all the details of pets stored in database.
3. **GET METHOD** :- http://localhost:1000/api/pet/62d80647b05622f60a422bad This will show us the details of the pet according to the given pet id.
4. **PATCH METHOD** :- http://localhost:1000/api/pet/62d80647b05622f60a422bad This will update the details of the pet according to the given pet id. Patch will not return the json of updating object we can check by getting all details if entry woul be updated or not. Also only Name of pet will be changed to Husky as this is hardcoded in code.
5. **DELETE METHOD** :- http://localhost:1000/api/pet/62d80647b05622f60a422bad This will delete the details of the pet according to the given pet id. Delete will not return the json of deleting object we can check by getting all pet details if entry would deleted or not.

### Heroku

Also we can use this app without starting the server in local, as this app is deployed on heroku. We not need to clone the repository or not need to start the server for that we can directly follows the given urls in POSTMAN with same methods as above.


1. **POST METHOD** :- https://fastjobpetapp.herokuapp.com/api/pet This will add the details of pet into monogo db according to test.xslx file.
2. **GET METHOD** :- https://fastjobpetapp.herokuapp.com/api/pet This will show all the details of pets stored in database.
3. **GET METHOD** :   https://fastjobpetapp.herokuapp.com/api/pet/62d80647b05622f60a422bad  This will show us the details of the pet according to the given pet id.
4. **PATCH METHOD** :-https://fastjobpetapp.herokuapp.com/api/pet/62d80647b05622f60a422bad This will update the details of the pet according to the given pet id. Patch will not return the json of updating object we can check by getting all details if entry woul be updated or not. Also only Name of pet will be changed to Husky as this is hardcoded in code.
5. **DELETE METHOD** :- https://fastjobpetapp.herokuapp.com/api/pet/62d80647b05622f60a422ba This will delete the details of the pet according to the given pet id. Delete will not return the json of deleting object we can check by getting all pet details if entry would deleted or not.

### Implementation details :-

Using npm init create file named as package.json. After that run npm install express nodemon to install these dependencies.

Create one file named as app.js where whole things will be happened in package.json file edit the scripts key to nodemon app.js

Create test.xlsx file in which have 4 cloumns Name, Type, Breed, Age.

Create the databse on mongodb to store the data we received from test.xlsx file.

After that implement the whole logic create petModel.js for schema of our database. Also create petRoutes for our API.

In end deployed the whole code on heroku for global access of this a
