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
                    bat label: 'Run Test', script: '''npx cypress run '''
                }
            }
        }
    }
}

