pipeline {
    // agent {
    //     docker {
    //         image 'node:18.18.0-alpine3.18'
    //         args '-p 3000:3000'
    //     }
    // }
    agent any
    stages {
        stage('Dependencies') {
            steps {
                sh './scripts/dependencies.sh'
            }
        }
        stage('Unit testing') {
            steps {
                sh './scripts/test.sh'
            }
        }
        stage('Build') {
            steps {
                sh './scripts/build.sh'
            }
        }
        stage('Deploy') {
             steps {
                 sh './scripts/deploy.sh'
             }
         }
     }
}