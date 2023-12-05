// firebase.js
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
// require('dotenv').config()
// import 'firebase/compact/firestore' // If you intend to use Firestore

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SEND_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURE_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
// export const firestore = firebase.firestore() //Export Firestore if needed
export default firebase
