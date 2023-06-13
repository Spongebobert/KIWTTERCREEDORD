function add_user()  {
    username = document.getElementById("user_name").value;
    console.log("username")
    localStorage.setItem("user_name", username);
    window.location="kwitter_room.html"
}