

let x = document.getElementById("college-cllps");
let y = document.getElementById("exam-cllps");


function collegeCollapse() {
    if (x.style.display == "none") {
      x.style.display = "block";
      y.style.display = "none";
    } else {
      x.style.display = "none";
    }
  }


function examCollapse() {
    if (y.style.display == "none") {
      y.style.display = "block";
      x.style.display = "none";
    } else {
      y.style.display = "none";
    }
  }


// sideBar js
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}