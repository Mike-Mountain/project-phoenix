#!/usr/bin/env groovy

pipeline {
  agent {
    docker {
      image 'node'
      args '-u root'
    }
  }

  stages {
    stage('Install') {
      steps {
        echo 'Installing dependencies'
        sh 'npm config set proxy http://localhost:8080'
        sh 'npm config set https-proxy http://localhost:8080'
        sh 'npm config set registry http://registry.npmjs.org/'
        sh 'npm install --verbose'
      }
    }
    stage('Build') {
      steps {
        echo 'Building files'
        sh 'npm run build:container'
      }
    }
  }
}
