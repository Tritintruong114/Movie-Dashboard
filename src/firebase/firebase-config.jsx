// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
//this is firebase libaries
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5ClTAm5NfTLep-rWWGUTo0_Tl-C0di8",
  authDomain: "netflix-dashboard-a8aa5.firebaseapp.com",
  projectId: "netflix-dashboard-a8aa5",
  storageBucket: "netflix-dashboard-a8aa5.appspot.com",
  messagingSenderId: "53972955854",
  appId: "1:53972955854:web:48d976eb7063845b1c569f",
};

// Initialize Firebases
const app = initializeApp(firebaseConfig);
//export for using in compoonent
export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("photoUrl", photo);
    })
    .catch((e) => console.log(e));
};
