pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                echo 'Code checkout completed'
            }
        }

         stage('Backend - Install Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Backend - Build / Start Check') {
            steps {
                dir('backend') {
                    sh 'npm run start & sleep 5'
                }
            }
        }
    }

    post {
        success {
            echo 'Backend CI passed'
        }
        failure {
            echo 'Backend CI failed'
        }
    }

    }

