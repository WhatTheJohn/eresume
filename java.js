function closeMe() {
  // document.write("TESTING 123");
  x = document.getElementById("demo1");
  y = document.getElementById("demo2");
  x.style.display = "block";
  y.style.display = "none";
}
function openMe() {
  x = document.getElementById("demo1");
  y = document.getElementById("demo2");
  x.style.display = "none";
  y.style.display = "block";
}
