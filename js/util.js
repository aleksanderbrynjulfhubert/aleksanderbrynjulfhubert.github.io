function toggleNav() {
    if (document.getElementById("mySidenav").value == "0") {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "#e5e5e5";
        document.getElementById("mySidenav").value = "1"; 
    } else {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        document.getElementById("mySidenav").value = "0"; 
    }
}

function hide() {
  var x = document.getElementById("pan");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}