/* Toggle between adding and removing the "responsive" class to the navbar when the user clicks on the icon */
function displayMenu() {
  let nav = document.getElementById("myNavbar");
  console.log(nav)
  if (nav.className === "navbar") {
    nav.className += "responsive";
  } else {
    nav.className = "navbar";
  }
}