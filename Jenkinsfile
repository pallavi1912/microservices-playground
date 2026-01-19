pipeline {
    agent {
        docker {
            image 'node:20'
            args '-u root:root'  // optional
        }
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Backend - Install Dependencies') {
            steps {
                dir('backend') {
                    sh 'node -v'
                    sh 'npm -v'
                    sh 'npm install'
                }
            }
        }

        stage('Backend - Test') {
            steps {
                dir('backend') {
                    sh 'npm test'
                }
            }
        }
    }

    post {
        success { echo 'Backend CI passed' }
        failure { echo 'Backend CI failed' }
    }
}
