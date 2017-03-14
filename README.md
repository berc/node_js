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


for continuous ts development you can run
```bash
tsc -w **/*.ts
```

Based on @angularclass/angular2-webpack-starter + NodeJS Express with TypeScript

Please note that Angular2 integration is not finished, but server side basic rendering is working on localhost:4300 address.

                --- Rastislav Bertusek ---
