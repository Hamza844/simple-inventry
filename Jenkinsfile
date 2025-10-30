pipeline {
    agent { label 'mynode' }

    stages {
        stage('Hello World') {
            steps {
                echo 'Hello World from Jenkins on AWS Agent!'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    chmod +x install.sh
                    ./install.sh
                '''
            }
        }
    }
}
