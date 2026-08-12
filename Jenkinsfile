pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm ci --no-audit --no-fund'

                echo 'Building React application...'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests...'
                sh 'CI=true npm test -- --watchAll=false --passWithNoTests'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying React build to Nginx...'
                sh '''
                    find /var/www/html -mindepth 1 -maxdepth 1 -exec rm -rf -- {} +
                    cp -a build/. /var/www/html/
                '''
            }
        }

        stage('Verify') {
            steps {
                echo 'Verifying deployed website...'
                sh 'curl --fail --silent --show-error http://localhost/ > /dev/null'
                echo 'Website deployment verified successfully.'
            }
        }
    }

    post {
        success {
            echo 'CI/CD pipeline completed successfully.'
        }

        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }
    }
}