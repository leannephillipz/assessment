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

// Get a reference to the database service
// var database = firebase.database().ref("people");

var db = firebase.database();

var ref = db.ref("tasks").orderByKey();

// ref.once("value")
//   .then(function(snapshot) {
//     var a = snapshot.exists();  // true
//     console.log(a);
//   });


  ref.once("value")
    .then(function(snapshot) {

      var data = snapshot.toJSON();

      snapshot.forEach(function(childSnapshot) {
        // key will be "ada" the first time and "alan" the second time
        var key = childSnapshot.key;
        // childData will be the actual contents of the child
        var childData = childSnapshot.val();
        console.log(key, childData );
        console.log(data);
    });
  });


document.getElementById('submit').onclick = function() {
  console.log("click");

//
//   var newdata = db.ref("tasks");
//   var publish = newdata.push(); // sets a auto unique key
//   publish.set({
//     'user_id': 'ada',
//     'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
//   });
//   var path = publish.toString();
// }

  var newdata = db.ref("tasks");
  // var publish = newdata.child(); // sets a auto unique key
  // publish.set({
  //   'user_id': 'ada',
  //   'text': 'The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.'
  // });
  // var path = publish.toString();


    // newdata.child('1-1').set({key: "hello"}).then().catch();

    // newdata.child('4').child('1').set({"title": "Research Tools & Methods."}).then().catch();


    newdata.child('4').child('1').child('b').set({"desc" : "desc", "title": "Quantitative and Qualitative definition"}).then().catch();
}
