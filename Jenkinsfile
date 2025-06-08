pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/aravindav/ec2-node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                // Add test commands here if you have tests
                echo 'Skipping tests for now...'
            }
        }

        stage('Deploy') {
            steps {
                // Run your Ansible playbook to deploy the app
                sh 'ansible-playbook -i inventory.ini deploy.yml'
            }
        }
    }
}

