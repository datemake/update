import { firebase } from '@firebase/app'
import 'firebase/firebase-storage'

var config = {
        apiKey: "AIzaSyCXnqkV46yt0XYCa3ZhKvKVhEozpf8EofA",
        authDomain: "group-project-e903d.firebaseapp.com",
        databaseURL: "https://group-project-e903d.firebaseio.com",
        projectId: "group-project-e903d",
        storageBucket: "group-project-e903d.appspot.com",
        messagingSenderId: "689677486989"
    };
    if(!firebase.apps.length){
        firebase.initializeApp(config);
    }
    // export const googleProvider = new firebase.auth.GoogleAuthProvider()
    // export const provider = new firebase.auth.GoogleAuthProvider();
    // export const auth = firebase.auth();


    export default firebase