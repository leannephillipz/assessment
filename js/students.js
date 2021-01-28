$( document ).ready(function() {

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

  var ref = db.ref("students");
  var jsondata = "";
  var template = $("#template").html();
  var compiled = Handlebars.compile(template);


let objdata = {};

  ref.on("value", function(snapshot){

      // newdata = JSON.stringify(snapshot.val(), null, 2);
      let objdata = { "students": snapshot.val() };
      // console.log(newdata);
      // objdata.push(newdata);
      console.log(objdata);

      jsondata = objdata;
      var render = compiled(jsondata);
      $(".container").html(render);

  });



});
