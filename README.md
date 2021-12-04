## Table of contents
* [Introduction](#Introduction)
* [Folders](#Folders)
    - [models](#--models)
    - [user ( or [entity] in general)](#--user)
    - [use-cases](#--use-cases)
    - [controllers](#--controllers)
    - [routes](#--routes)
* [Todo](#TODO)
## Introduction
A simple REST API with authentication that uses Express, JWT, MongoDB.
## Folders
### `./models`
This folder contains all the entities used by our database, since I am using MongoDB I used mongoose to handle all the logic.<br/>
The only entity present in this repo is the User since the aim of this repository is to gave a braod base to start a REST project that requires authenticaiton.<br />
Note: This folder is one of the few without [injected dependencies](https://en.wikipedia.org/wiki/Dependency_injection).
### `./user`
This folder contains all the logic to create the User object, all the user attributes validation shall be implemented here.<br /><br />
Best practices:<br />
Given an entity [entity1] I recommend adding a file [entity1].validators.js under the [entity1] folder that has all the validations functions. And if you have an [entity2] that is highly connected to the [entity1] I reccomend still adding it under the [entity1] folder and having a structure like this:<br/><br/>
./[entity1]/index.js<br/>
./[entity1]/[entity1].js<br/>
./[entity1]/[entity1].validators.js<br/>
./[entity1]/[entity2].js<br/>
./[entity1]/[entity2].validators.js<br/><br />

Example: *Post* and *Like*, this 2 entities are highly connected to eachother therefore above best practice apply

### `./use-cases`
This folder contains all the base functions that will be then used by the controllers. This folder implements all the various entities.<br />
For example, if we added a 'Post' entity possible use-cases functions would be: *addPost, removePost, archivePost*.

### `./controllers`
The code contained in this folder is responsible for handling the requests by implementing the use-cases functions. Ideally we would have a controller for each endpoint, since every endpoint have different logic to follow.

### `./routes`
The code in this folder implements all the controllers by passing them to the `./expresss-callback` that handles all the basic functionality needed for every request (Mainly headers related stuff). The routes are grouped by category (e.g. `auth.routes.js`) since this makes it more easier to see the routes just form the file structure and makes everything cleaner.

## TODO
- [ ] Tests
- [ ] Documentation :)