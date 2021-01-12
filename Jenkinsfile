def VERSION = "${env.BUILD_NUMBER}"
def DIST_ARCHIVE = "dist.${env.BUILD_NUMBER}"
def S3_BUCKET_DEV = 'hcaf-dev'
def S3_BUCKET_TEST = 'hcaf-test'
def S3_BUCKET_QA = 'hcaf-qa'
def S3_BUCKET = 'hcaf'

pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh 'npm install --verbose -d'
                sh 'npm install -g @angular/cli@7.3.9'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build --prod'
            }
        }
        stage('Deploy-Dev') {
            steps {
                sh 'aws s3 cp ./dist/angular/ s3://${S3_BUCKET_DEV}/ --recursive --acl public-read'
            }
        }
        stage('Deploy-Test') {
            steps {
                sh 'aws s3 cp ./dist/angular/ s3://${S3_BUCKET_TEST}/ --recursive --acl public-read'
            }
        }
        stage('Deploy-Qa') {
            steps {
                sh 'aws s3 cp ./dist/angular/ s3://${S3_BUCKET_QA}/ --recursive --acl public-read'
            }
        }
        stage('Deploy-Prod') {
            steps {
                snDevOpsChange()
                sh 'aws s3 cp ./dist/angular/ s3://${S3_BUCKET}/ --recursive --acl public-read'
            }
        }
    }
}
