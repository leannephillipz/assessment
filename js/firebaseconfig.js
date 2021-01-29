

const firebaseConfig = {
  apiKey: "AIzaSyAunon-rdzhazG4EYIM5_fRXIQh7JVRM-A",
  authDomain: "assessment-2f428.firebaseapp.com",
  databaseURL: "https://assessment-2f428-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "assessment-2f428",
  storageBucket: "assessment-2f428.appspot.com",
  messagingSenderId: "18624726857",
  appId: "1:18624726857:web:a5af96560dedfdb91efc98",
  measurementId: "G-P8VP1VDB00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.database();


// if (!firebase.app.length) {
//   console.log("nope");
//    firebase.initializeApp(firebaseConfig);
// } else {
//   console.log("ready to go");
//
//    // firebase.app(); // if already initialized, use that one
// }
//
// var db = firebase.database();
