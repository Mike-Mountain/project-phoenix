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
        sh 'rm package-lock.json'
        sh 'npm cache clean --force'
        sh 'npm install'
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
