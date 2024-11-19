
pipeline {
    agent any

    tools {
        nodejs "NodeJS 18" // Matches the name configured in NodeJS plugin
    }

    environment {
        BUILD_DIR = "out" // Output directory for the build
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test' // Ensure your project has tests configured
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                if [ -d "$BUILD_DIR" ]; then
                  echo "Deploying build to /var/www/nextjs-app"
                  sudo cp -r $BUILD_DIR/* /var/www/nextjs-app/
                else
                  echo "Build directory not found!"
                  exit 1
                fi
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline completed"
        }
        success {
            echo "Build and Deployment successful!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
