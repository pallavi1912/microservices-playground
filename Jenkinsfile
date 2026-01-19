pipeline {
  agent any

  tools {
    nodejs 'node'
  }

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

    stage('Backend - Test') {
      steps {
        dir('backend') {
          sh 'npm test'
        }
      }
    }
  }

  post {
    failure {
      echo 'Backend CI failed'
    }
    success {
      echo 'Backend CI passed'
    }
  }
}
