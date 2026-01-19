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
    success {
      echo 'Backend CI passed'
    }
    failure {
      echo 'Backend CI failed'
    }
  }
}
