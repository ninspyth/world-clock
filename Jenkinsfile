pipeline {
    agent any
    tools {
        nodejs "NodeJS 18"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm clean-install'
                sh 'npm run build'
                sh 'npm run export'
            }
        }
        stage('Local Deploy') {
            steps {
                sh 'cp -r ./out/* /var/www/nextjs-app'
            }
        }
    }
}
