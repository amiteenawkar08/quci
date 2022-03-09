var firebaseConfig = {
      apiKey: "AIzaSyABMOpy1Knv6qGOBy4XkhcgVCvh1pnA6xk",
      authDomain: "laughter-and-joy.firebaseapp.com",
      databaseURL: "https://laughter-and-joy-default-rtdb.firebaseio.com",
      projectId: "laughter-and-joy",
      storageBucket: "laughter-and-joy.appspot.com",
      messagingSenderId: "797365832035",
      appId: "1:797365832035:web:043e973958e7a2baeeeb56"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"   
      });
      localStorage.setItem("room_name", room_name);
      window.location ="quick-snap_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
console.log("Room Name -" + Room_names);
row = "<div class='room_name' id=" +Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "quick-snap_page.html";
}

function redrectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" ,name);
      window.location = "quick-snap_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}

