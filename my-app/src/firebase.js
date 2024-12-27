// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzzqG_c-KV_T4bCFI0G9qxMdEeXlK8IKI",
  authDomain: "netflix-clone-8d174.firebaseapp.com",
  projectId: "netflix-clone-8d174",
  storageBucket: "netflix-clone-8d174.firebasestorage.app",
  messagingSenderId: "992516126361",
  appId: "1:992516126361:web:199d6c5b215841e628ea08",
  measurementId: "G-08H3G44ZD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async (name,email,password) =>{
    try{
        const res = await createUserWithEmailAndPassword(auth , email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    } catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
    toast.error(error.code);
}

export {auth,db,login,signUp,logout};