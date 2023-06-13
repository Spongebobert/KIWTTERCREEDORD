//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBYyzuoPWVHo2BipiPfydZ9vI2qojs4Jug",
      authDomain: "kwitterhw2.firebaseapp.com",
      projectId: "kwitterhw2",
      storageBucket: "kwitterhw2.appspot.com",
      messagingSenderId: "736229771834",
      appId: "1:736229771834:web:1034c21caf1f2d482e8303"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      room_name = localStorage.getItem("room_name");
      function send(){
            msg = document.getElementById("message").value;
            firebase.database().ref(room_name).push({
                  name:user_name,
                  message:msg,
                  like:0
            })
            document.getElementById("message").value = " ";

      }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name1 +"<img src='tick.png' class='user_tick'></h4>";
message_with_tag = "<h4 class='mesage_h4'>" + message +"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updatelike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>like: "+ like +"</span></button><hr>";
dislike_button = "<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updatelike2(this.id)'>";
disspan_with_tag = "<span class='glyphicon glyphicon-thumbs-down'>like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag +dislike_button +disspan_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function updatelike(message_id) {
      console.log("clicked on the like button"+ message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+ 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes

      
      }) 
} 
function updatelike2(message_id2) {
      console.log("clicked on the dislike button"+ message_id2);
      button_id = message_id2;
      likes2 = document.getElementById(button_id).value;
      updated2_likes = Number(likes2)- 1;
      console.log(updated2_likes);
      firebase.database().ref(room_name).child(message_id2).update({
            like: updated2_likes

      
      }) 
} 

