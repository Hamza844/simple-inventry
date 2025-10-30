pipeline {
    agent { label 'mynodes' }

    stages {
        stage('Install declarative tool') {
            steps {
                sh '''
                    sudo chmod +x install.sh
                    ./install.sh
                '''
            }
        }
        stage("Compile") {
            echo "compile is successfull"
        }
    }
}
