function next() {
  if (document.getElementById("image").getAttribute("src") == "assets/img1.jpg") {
    document.getElementById("image").setAttribute("src", "assets/img2.jpg");
  }
  else if (document.getElementById("image").getAttribute("src") == "assets/img2.jpg") {
    document.getElementById("image").setAttribute("src", "assets/img3.jpg");
  }
  else if (document.getElementById("image").getAttribute("src") == "assets/img3.jpg") {
    document.getElementById("image").setAttribute("src", "assets/img1.jpg");
  }
}
