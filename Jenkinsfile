pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/aravindav/ec2-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'npm test || true' // use || true if no test scripts for now
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         // assuming SSH is set up and Ansible or SCP is ready
        //         sh 'echo "Deploying..."'
        //     }
        // }
    }
}
