
 var firebaseConfig = {
      apiKey: "AIzaSyAMuzLAivYagdWgqKt5kQ64dUjEBySMJwU",
      authDomain: "kwitter-7b92c.firebaseapp.com",
      databaseURL: "https://kwitter-7b92c-default-rtdb.firebaseio.com",
      projectId: "kwitter-7b92c",
      storageBucket: "kwitter-7b92c.appspot.com",
      messagingSenderId: "1080597705255",
      appId: "1:1080597705255:web:e508d4cf742f4738f6d402"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
