def VERSION = "${env.BUILD_NUMBER}"
def DIST_ARCHIVE = "dist.${env.BUILD_NUMBER}"

pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install --verbose -d'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }
        stage('Deploy-Dev') {
            when {
                branch 'dev'
            }
            steps {
                sh 'aws s3 cp ./dist/angular/ s3://hcaf-dev/ --recursive --acl public-read'
            }
        }
        stage('Deploy-Test') {
            when {
                branch 'test'
            }
            steps {
                sh 'aws s3 cp ./dist/angular/ s3://hcaf-test/ --recursive --acl public-read'
            }
        }
        stage('Deploy-Prod') {
            when {
                branch 'main'
            }
            steps {
                snDevOpsChange()
                sh 'aws s3 cp ./dist/angular/ s3://hcaf/ --recursive --acl public-read'
            }
        }
    }
}
