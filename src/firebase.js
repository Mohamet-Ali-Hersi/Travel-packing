import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD-mI30dOl9VHsUmwuLsWDNhekn5HzOMwM",
  authDomain: "packinglist-72334.firebaseapp.com",
  projectId: "packinglist-72334",
  storageBucket: "packinglist-72334.appspot.com",
  messagingSenderId: "580676274005",
  appId: "1:580676274005:web:f972130320a992c84cd1dc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
