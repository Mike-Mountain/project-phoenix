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
        sh 'echo "legacy-peer-deps=true" >> .npmrc'
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
