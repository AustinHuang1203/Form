const pwd = document.getElementById("password");
pwd.addEventListener("mouseout",store);
pwd.addEventListener("keyup",store);
pwd.addEventListener("mouseout",check);
pwd.addEventListener("keyup",check);
const pwd1 = document.getElementById("password1");
pwd1.addEventListener("mouseout",check);
pwd1.addEventListener("keyup",check);
const submit1 = document.getElementById("submit2");
submit1.addEventListener("mouseover",style1);
submit1.addEventListener("mouseout",style2);

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

function style1(){
    submit1.style.backgroundColor="green";
    submit1.style.color="white";
}

function style2(){
    submit1.style.backgroundColor="transparent";
    submit1.style.color="green";
}
