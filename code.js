const pwd = document.getElementById("password");
pwd.addEventListener("mouseout",store);
pwd.addEventListener("keyup",store);
pwd.addEventListener("mouseout",check);
pwd.addEventListener("keyup",check);
const pwd1 = document.getElementById("password1");
pwd1.addEventListener("mouseout",check);
pwd1.addEventListener("keyup",check);

let stored = ""
function store(){
    stored = pwd.value;
}

function check(){
    if (stored == pwd1.value){
        pwd1.setCustomValidity("");
    }
    else{
        pwd1.setCustomValidity("Passwords do not match!");
    }
}

