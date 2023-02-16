const navbar = document.getElementById('navbar');
const jir = document.getElementById('jir');
let open = false;

// open and close within a one funtion
function opandcl() {
    if (open == false) {
        fur();
    } else {
        xir();
    }
}

function fur(){
    if (open == false) {
        open = true;
        navbar.style.display = "block";
        jir.style.marginRight = "150px";
        jir.style.transition = "0.9s linear all";
    }
}
function xir(){
    if (open == true) {
        open = false;
        navbar.style.display = "none";
        jir.style.marginRight = "0px";

    }
}