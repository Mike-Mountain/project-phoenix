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
//         sh 'npm config ls -l | grep prox'
//         sh 'npm config set proxy http://jenkins.honeystonemountain.com'
//         sh 'npm config set https-proxy https://jenkins.honeystonemountain.com'
//         sh 'npm config set strict-ssl false'
//         sh 'npm config set registry http://registry.npmjs.org/'
//         sh 'npm config rm proxy'
//         sh 'npm config rm https-proxy'
//         sh 'npm config ls -l | grep prox'
        sh 'npm install -g npm@latest'
//         sh 'rm -rf /var/lib/jenkins/workspace/Container/node_modules'
//         sh 'npm install'
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
