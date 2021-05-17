import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAZg1e2oFlbhBye_VLUXTZFkd8wtbaAQs0",
  authDomain: "disneyclone1.firebaseapp.com",
  projectId: "disneyclone1",
  storageBucket: "disneyclone1.appspot.com",
  messagingSenderId: "791882106491",
  appId: "1:791882106491:web:a500639912e31d2a9044de",
  measurementId: "G-C4QY99MBQ1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
