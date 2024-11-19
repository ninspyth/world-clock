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
                sh '''
                sudo chmod 777 /var/www/nextjs-app
                cp -r ./out/404.html ./out/_next ./out/favicon.ico ./out/file.svg ./out/globe.svg ./out/index.html ./out/next.svg ./out/vercel.svg ./out/window.svg /var/www/nextjs                -app
            '''
            }
        }
    }
}
