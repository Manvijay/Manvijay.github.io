console.log("So you knew about console logging?");

function toggleBurger() {
    var x = document.getElementsByClassName("navbar-toggler");
    console.log(x);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
