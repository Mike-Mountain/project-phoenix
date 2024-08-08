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
        sh 'npm config rm proxy'
        sh 'npm config rm https-proxy'
        sh 'rm package-lock.json'
        sh 'npm cache clean --force'
        sh 'node --version'
        sh 'node --version'
        sh 'npm --version'
        sh 'npm config ls -l'
        sh 'cat /usr/local/etc/npmrc'
//         sh 'npm install'
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
