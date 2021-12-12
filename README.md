**Stack**
- Node JS / JS / npm
- Express (Node JS framework)
- Socket.io

--------------------------------

**How to run**

This how to explains how to run this project on Ubuntu server.

1. Update your system
```
sudo apt update && sudo apt -y upgrade
```
2. Install the most recent version of Nodejs and npm (node packet manager). We use this repository because the normal Ubuntu repository has very old version.
```
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
```
3. Test Nodejs
```
node -v
```
4. Test npm
```
npm -v
```
5. Install nodemon globally
```
sudo npm install -g nodemon
```
6. Clone the repository
```
git clone https://github.com/kuressaareametikool/arduino-project-server.git
```
7. Change directory to project folder
```
cd arduino-project
```
8. Install modules
```
npm install
```
9. Run server
```
nodemon server.js
``` 
