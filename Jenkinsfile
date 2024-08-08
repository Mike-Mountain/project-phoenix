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
        sh 'sed -i '10.255.255.254/8.8.8.8' /etc/resolv.conf"
        sh 'cat /etc/resolv.conf'
//         sh 'npm install --verbose'
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
