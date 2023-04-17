import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAn5ClTAm5NfTLep-rWWGUTo0_Tl-C0di8",
  authDomain: "netflix-dashboard-a8aa5.firebaseapp.com",
  projectId: "netflix-dashboard-a8aa5",
  storageBucket: "netflix-dashboard-a8aa5.appspot.com",
  messagingSenderId: "53972955854",
  appId: "1:53972955854:web:48d976eb7063845b1c569f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
