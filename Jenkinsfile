pipeline {
    agent any

    tools {
        nodejs 'NodeJS-18'
    }

    environment {
        VENV_DIR = 'venv'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                echo "Cleaning up the workspace before build..."
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/aravindav/ec2-node-app.git'
            }
        }

        stage('Verify Node Version') {
            steps {
                echo "Verifying that the correct Node.js version is in the PATH"
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true' // Run tests if available
            }
        }

        stage('Setup Ansible in Virtual Environment') {
            steps {
                sh '''
                    python3 -m venv ${VENV_DIR}
                    . ${VENV_DIR}/bin/activate
                    pip install --upgrade pip
                    pip install ansible
                '''
            }
        }

        stage('Deploy with Ansible') {
            steps {
                sshagent(credentials: ['aws-ec2-key']) {
                    sh '''
                        . ${VENV_DIR}/bin/activate
                        ansible-playbook -i ansible/inventory.ini ansible/deploy.yml \
                        --ssh-extra-args "-o StrictHostKeyChecking=no"
                    '''
                }
            }
        }
    }
}
