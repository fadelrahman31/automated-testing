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
If your PC is running `Windows OS`, **skip** this step. But if you're running `MacOS` : 
- **Rename** `package.json` to `package-json-windows`
- **Rename** `package-json-mac` to `package.json`

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

#### Run to Generate Local HTML Test Report
```bash
$ npm run test
```

After the program is finished, go to `<root-project>/cypress/reports/mochareports` and open `report.html`
