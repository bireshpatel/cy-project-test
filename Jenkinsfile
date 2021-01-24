pipeline {
  agent {
    // this image provides everything needed to run Cypress
    docker {
      image 'cypress/included:6.3.0'
    }
  }

  stages {
    stage('build and test') {
      environment {
        // we will be recording test results and video on Cypress dashboard
        // to record we need to set an environment variable
        // we can load the record key variable from credentials store
        // see https://jenkins.io/doc/book/using/using-credentials/
        CYPRESS_RECORD_KEY = credentials('cy-project-test-record-key')
      }

      steps {
        sh 'npm ci'
        sh "npm run test:ci:record"
      }
    }
  }
}