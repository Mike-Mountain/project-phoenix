#!/usr/bin/env groovy

pipeline {
  agent {
    docker {
      image 'node:20.16.0'
      args '-u root'
    }
  }

  stages {
    stage('Build') {
      steps {
        echo 'Building files'
        sh 'npx nx build container'
      }
    }
  }
}
