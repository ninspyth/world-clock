pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'NodeJS 18.0.0', type: 'NodeJS' // Ensure this matches the name in the Global Tool Configuration
        NPM_CONFIG_PREFIX = "${WORKSPACE}/.npm"
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the latest code from the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    sh 'npm install'
                }
            }
        }

        stage('Build Next.js') {
            steps {
                script {
                    // Build the Next.js app
                    sh 'npm run build'
                }
            }
        }

        stage('Export Static Files') {
            steps {
                script {
                    // Export static files to the 'out' folder
                    sh 'npm run export'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy the app to the server using SCP or SSH (if configured)
                    sh """
                        scp -r ./out/* username@your-server:/var/www/nextjs-app/out
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Deployment Success!'
        }
        failure {
            echo 'Build or Deployment Failed!'
        }
    }
}
