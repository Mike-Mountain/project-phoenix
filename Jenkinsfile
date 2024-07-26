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
        sh 'node --version'
      }
    }
  }
}
