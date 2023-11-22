pipeline {
  agent any
  stages { 
    stage('Deploy') {
      steps {
        sh 'docker build -t app .'
        sh 'docker run -d -p 3000:3000 app'
      }
  }
}
}
