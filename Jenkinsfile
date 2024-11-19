pipeline {
    agent any
    tools {
        nodejs "world-clock"
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm clean-install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Local Deploy') {
            steps {
                sh 'cp -r ./out/* /var/jenkins_home/nextjs-app/' 
            }
        }
    }
}
