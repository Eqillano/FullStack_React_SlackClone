import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCdOInlf9E4nkgZsn9H1wCqKGGrCgxBVgQ",
    authDomain: "slack-77325.firebaseapp.com",
    databaseURL: "https://slack-77325.firebaseio.com",
    projectId: "slack-77325",
    storageBucket: "slack-77325.appspot.com",
    messagingSenderId: "788733609489",
    appId: "1:788733609489:web:481ee4256421c939fe53b0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth,provider}
  export default db;