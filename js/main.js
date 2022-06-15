function myFunction() {
    var x = document.getElementById("mores");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  
  function display() {
    var x = document.getElementById("display");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }  
  function light() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }