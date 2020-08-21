import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDHgIlgWCXelZvpFOFQ5Ns88TOCnb4O4VE',
  authDomain: 'chat-room-17560.firebaseapp.com',
  databaseURL: 'https://chat-room-17560.firebaseio.com',
  projectId: 'chat-room-17560',
  storageBucket: 'chat-room-17560.appspot.com',
  messagingSenderId: '589174807749',
  appId: '1:589174807749:web:2b128c89d0376943b0e4ac',
  measurementId: 'G-5WP2E34Y07',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()
