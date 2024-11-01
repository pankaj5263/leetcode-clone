import {useState} from "react";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDkmWOztLmVbDzKJckhZWV7WA7EqmoYmkU",
  authDomain: "leetcode-clone-f88fc.firebaseapp.com",
  projectId: "leetcode-clone-f88fc",
  storageBucket: "leetcode-clone-f88fc.firebasestorage.app",
  messagingSenderId: "374973157765",
  appId: "1:374973157765:web:30ab569b3925bf2171b4ec",
  measurementId: "G-SD5EESBZGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const actionCodeSettings = {
  url: 'https://localhost:3000',
  handleCodeInApp: true,
};

const SignIn = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");

  async function onSignIn() {
    
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem('emailForSignIn', email);
        alert("sent email");
      })
      .catch((error) => {
        alert("not");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <>
        <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
        <button onClick={onSignIn}>SignIn</button>
    </>
  )
}

export default SignIn;