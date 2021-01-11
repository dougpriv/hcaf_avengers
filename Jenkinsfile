def VERSION = "${env.BUILD_NUMBER}"
def DIST_ARCHIVE = "dist.${env.BUILD_NUMBER}"
def S3_BUCKET = 'cdi-avengers'

pipeline {
    agent any
    tools { nodejs "NodeJS 15.5.1" }

    stages {
        stage('NPM Install') {
            steps {
                snDevOpsStep()
                sh 'npm install --verbose -d'
            }
        }
        stage('Build') {
            steps {
                snDevOpsStep()
                sh 'npm run build --prod'
            }
        }
        stage('Archive') {
            steps {
                sh "cd dist && zip -r ../dist.zip . && cd .."
                archiveArtifacts artifacts: "dist.zip", fingerprint: true
            }
        }
        stage('Deploy') {
            steps {
                snDevOpsStep()
                snDevOpsChange()
                sh 'aws s3 cp ./dist/angular/ s3://cdi-avengers/ --recursive --acl public-read'
          }
        }
    }
}
