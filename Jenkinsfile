#!/usr/bin/env groovy

pipeline {
  agent {
    docker {
      image 'node:20.16.0'
      args '-u root'
    }
  }

  stages {
    stage('Install') {
      steps {
        echo 'Installing dependencies'
//         sh 'npm config set registry http://registry.npmjs.org/'
        sh 'ls ~/.npm'
        sh 'npm config get proxy'
        sh 'npm config rm proxy'
        sh 'npm config rm https-proxy'
      }
    }
    stage('Build') {
      steps {
        echo 'Building files'
//         sh 'npm run build:container'
      }
    }
  }
}
