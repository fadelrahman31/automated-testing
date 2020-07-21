pipeline {
    agent any
    
    stages {

        stage('build'){
            steps{
                script {
	                bat label: 'Install NPM', script: '''npm install'''
	                bat label: 'Install Cypress', script: '''npm install cypress --save-dev'''
                }
            }
        }

        stage('test'){
            steps{
                script{
                    bat label: 'Run Test', script: '''npm run test '''
                }
            }
        }

        stage('result'){
            steps{
                script{
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'cypress/reports/mochareports', reportFiles: 'report.html', reportName: 'Test Report', reportTitles: ''])
                }
            }
        }
    }
}

