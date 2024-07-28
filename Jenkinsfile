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
        sh 'npm i'
      }
    }
    stage('Build') {
      steps {
        echo 'Building files'
        sj 'npm config set registry http://registry.npmjs.org/'
        sh 'npm run build:container'
      }
    }
  }
}
