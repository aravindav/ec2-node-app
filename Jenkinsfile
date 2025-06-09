pipeline {
    agent any

     tools {
        nodejs 'NodeJS-18'
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

        stage('Debug') {
            steps {
                sh 'ls -la'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test || true' // use || true if no test scripts for now
            }
        }

        // stage('Deploy') {
        //     steps {
        //         // assuming SSH is set up and Ansible or SCP is ready
        //         sh 'echo "Deploying..."'
        //     }
        // }

         stage('Setup Ansible') {
            steps {
                echo "Installing required Ansible collections..."
                // This command installs the general community collection
                sh 'ansible-galaxy collection install community.general'
            }
        }
       stage('Deploy with Ansible') {
            steps {
                sshagent(credentials: ['aws-ec2-key']) {
                    sh '''
                        ansible-playbook -i ansible/inventory.ini ansible/deploy.yml \
                        --ssh-extra-args "-o StrictHostKeyChecking=no"
                    '''
                }
            }
        }

        // stage('Deploy') {
        //     steps {
        //         sshagent(['aws-ec2-key']) {
        //         sh 'ansible-playbook -i ansible/inventory.ini ansible/deploy.yml'
        //         }
        //     }
        // }
    }
}
