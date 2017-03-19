download NodeJS + Angular starter kit
```bash
git clone https://github.com/berc/nodejs-angular-starterkit.git
```
cd to the starter kit directory
```bash
cd nodejs-angular-starterkit
```
install all dependencies
```bash
npm install
```
cd to the server directory
```bash
cd server
```
install node with monitoring of source files
```bash
npm install -g nodemon
```
from server folder for running live reload environment
```bash
nodemon ./bin/www.js
```

go to the http://localhost:4300/ in your browser

for Angular 2 + Redux integration is needed additional step in 'nodejs-angular-starterkit' folder
```bash
npm start
```

go to the http://localhost:3000/ in your browser



for continuous ts development you can run in 'server' folder
```bash
tsc -w **/*.ts
```

Based on @angularclass/angular2-webpack-starter + NodeJS Express with TypeScript


Please note that Angular2 + Redux integration is working on localhost:3000 and server side rendering is working on localhost:4300 address.

--- Rastislav Bertusek ---
