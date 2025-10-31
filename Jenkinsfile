pipeline {
    agent { label 'mynode' }

    stages {
        stage('Install Declarative Tool') {
            steps {
                sh '''
                    sudo chmod +x install.sh
                    ./install.sh
                '''
            }
        }

        stage('Compile') {
            steps {
                echo 'Compile is successful'
            }
        }

        stage('Trivy FS Scan') {
            steps {
                sh '''
                    echo "Running Trivy file system scan..."
                    trivy fs --exit-code 1 --severity HIGH,CRITICAL .
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline finished."
        }
        failure {
            echo "❌ Build failed — check logs for details!"
        }
        success {
            echo "✅ All good — build and scan completed successfully!"
        }
    }
}
