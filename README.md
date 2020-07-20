# automated-testing
> Automated Testing Program for Quipper's Product QA \
Fadel Nararia Rahman \
v1.0, June 2020

### Requirements
To run this program locally, your PC must meet this minimum requirements: 
- Windows 7 or later, MacOS X or later
- NodeJS and NPM installed, latest version is preferred

Another library/package/dependecies will be installed on the installation section.

### Installation
To reproduce/run this program on your PC, follow the instruction below: 

#### Clone Repository to PC
```bash
$ git clone https://github.com/fadelrahman31/automated-testing.git
$ cd automated-testing
```

#### Determine your OS
Based on your computer OS, run **only one** of the following scripts according to your OS:
- `Windows OS`, double click on `using-windows.bat`
- `MacOS`, double click on `using-mac.bat`


#### Install the Required Dependencies
```bash
$ npm install
```

#### Install the Cypress Dependencies
```bash
$ npm install cypress --save-dev
```

### Run the Program
There are two alternatives method to run this program, either to opened it in Cypress GUI Mode or in Browser from local HTML test report.

#### Run in Cypress GUI Mode
```bash
$ npm run cypress:open
```
Here's how it's gonna look like: \
\
![](https://i.ibb.co/jHD0RqZ/cypress-GUI.png)
![](https://i.ibb.co/WWsp3TJ/cypress-testing.png)

#### Run to Generate Local HTML Test Report
```bash
$ npm run test
```

After the program is finished, go to `<root-project>/cypress/reports/mochareports` and open `report.html`\
Here's how it's gonna look like: \
\
![](https://i.ibb.co/L9Zvcb3/mochawesome-reports.png)
\
There are also several other outputs, such as:
- Test Result JSON Files in `<root-project>/cypress/reports/mocha`
- Recorded Testing Videos in `<root-project>/cypress/videos`
