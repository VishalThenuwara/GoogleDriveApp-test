SSD Assignment 2 - OAuth 2.0 Authorization test for google drive.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

## Prerequisites

This project is web-based. Therefore need to set up a web server on your local machine.

## Installation

1. Create a new project in your web root.
Copy all files & directories inside this repository into your project folder.
```
1. css
    - submit.css
2. js
    - core.js
    - submit.js
3. modules
    - submit.html
4. index.html
```
2. Create a web project OAuth Client ID in [Google Developers Console](https://console.developers.google.com/) and get your client id and client secret. 

For authorized JavaScript origins, just provide localhost for the first field and the second field is important it needs to be the same for your project you can have different redirect URL. It is basically the URL to which Google redirects you whenever the user grants access to your application. Select it cautiously it needs to be the same for your project.

Current set up is done using Apache server but the server is hosted in an ip adress http://192.168.64.2/ therefore when specifying  the redirect url javascript origins has used xip.io as wildcard dns for ip addresses.
But if we are using the localhost it won't be an issue. Otherwise it's really important to add .xip.io at the end of the ip address.

> Make sure that you have enabled API services ([Guide](https://support.google.com/googleapi/answer/6158841?hl=en)).

3. After that, edit the file core.js which will hold the logic for index.html. In this file, we will redirect the user to the permissions page where users can grant access to your application.

```js
     // client id of the project

     var clientId = "";

     // redirect_uri of the project

     var redirect_uri = "";

     // scope of the project

     var scope = "https://www.googleapis.com/auth/drive";

     // the URL to which the user is redirected to

     var url = "";
```
4. Edit submit.js

```js

 const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const redirect_uri = "" // replace with your redirect_uri;
    const client_secret = ""; // replace with your client secret
    const scope = "https://www.googleapis.com/auth/drive";
    var access_token= "";
    var client_id = ""// replace it with your client id;

```
