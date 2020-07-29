pipeline {
    agent any
    
    stages {

        stage('build'){
            steps{
                script {
	                sh 'npm install'
	                sh 'npm install cypress --save-dev'
                }
            }
        }

        stage('test'){
            steps{
                script{
                    wrap([$class: 'Xvfb']){
                        echo 'testtest'  
                    }
                }
            }
        }

    }
}

