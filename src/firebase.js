import Firebase from 'firebase/app';
import 'firebase/remote-config';

const firebaseConfig = {
    apiKey: "AIzaSyB9nmI3_L_OD17sxr0wrZiySlJuADFgM0w",
    authDomain: "demo1-4e456.firebaseapp.com",
    projectId: "demo1-4e456",
    storageBucket: "demo1-4e456.appspot.com",
    messagingSenderId: "727976497350",
    appId: "1:727976497350:web:ccc3aba7315a2a708f87c7",
    measurementId: "G-Z72XGNP0CM"
};
const firebase = Firebase.initializeApp(firebaseConfig);
export default firebase
