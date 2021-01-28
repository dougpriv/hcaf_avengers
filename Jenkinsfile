def VERSION = "${env.BUILD_NUMBER}"
def DIST_ARCHIVE = "dist.${env.BUILD_NUMBER}"

pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install --verbose -d'
            }
            post {
                always {
                    echo 'Install tests'
                }
                success {
                    echo 'Test successed'
                }
                failure {
                    echo 'Test failed'
                }
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
            post {
                always {
                    echo 'Build tests'
                }
                success {
                    echo 'Test successed'
                }
                failure {
                    echo 'Test failed'
                }
            }
        }
        stage('Deploy-Dev') {
            steps {
                sh 'aws s3 cp ./dist/angular/ s3://hcaf-dev/ --recursive --acl public-read'
            }
            post {
                always {
                    echo 'Dev tests'
                }
                success {
                    echo 'Test successed'
                }
                failure {
                    echo 'Test failed'
                }
            }
        }
        stage('Deploy-Test') {
            steps {
                sh 'aws s3 cp ./dist/angular/ s3://hcaf-test/ --recursive --acl public-read'
            }
            post {
                always {
                    echo 'Test tests'
                }
                success {
                    echo 'Test successed'
                }
                failure {
                    echo 'Test failed'
                }
            }
        }
        stage('Deploy-Prod') {
            steps {
                snDevOpsChange()
                sh 'aws s3 cp ./dist/angular/ s3://hcaf/ --recursive --acl public-read'
            }
            post {
                always {
                    echo 'Prod tests'
                }
                success {
                    echo 'Test successed'
                }
                failure {
                    echo 'Test failed'
                }
            }
        }
    }
}
