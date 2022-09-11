const pwd = document.getElementById("password");
pwd.addEventListener("mouseout",store);


let stored = ""
function store(){
    stored = pwd.value;
}

