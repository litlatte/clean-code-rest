## Table of contents
* [Introduction](#Introduction)
* [Folders](#Folders)
* [Todo](#TODO)
## Introduction
A simple REST API with authentication that uses Express, JWT, MongoDB.
## Folders
`./models`<br/>
This folder contains all the entities used by our database, since I am using MongoDB I used mongoose to handle all the logic.<br/>
The only entity present in this repo is the User since the aim of this repository is to gave a braod base to start a REST project that requires authenticaiton.<br />
Note: This folder is one of the few without [injected dependencies](https://en.wikipedia.org/wiki/Dependency_injection).
<br/>
<br/>
`./user`<br/>
This folder contains all the logic to create the User object, all the user attributes validation shall be implemented here.<br /><br />
Best practices:<br />
Given an entity [entity1] I recommend adding a file [entity1].validators.js under the [entity1] folder that has all the validations functions. And if you have an [entity2] that is highly connected to the [entity1] I reccomend still adding it under the [entity1] folder and having a structure like this:<br/><br/>
./[entity1]/index.js<br/>
./[entity1]/[entity1].js<br/>
./[entity1]/[entity1].validators.js<br/>
./[entity1]/[entity2].js<br/>
./[entity1]/[entity2].validators.js<br/><br />

Example: *Post* and *Like*, this 2 entities are highly connected to eachother therefore above best practice apply

`./use-cases`<br />
This folder contains all the base functions that will be then used by the controllers.<br />
For example, if we added a 'Post' entity possible use-cases functions would be: *addPost, removePost, archivePost*.

## TODO
- [ ] Tests
- [ ] Documentation :)