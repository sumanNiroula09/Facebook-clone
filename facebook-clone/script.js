var settingsmenu= document.querySelector(".settings-menu")

var darkBtn= document.getElementById("dark-btn");

var closeads= document.querySelector(".sidebar-ads")


function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height")
     
}

//this is the fuction to apply dark and light mode 

function close(){
    closeads.classList.toggle("sidebar-ads-close")

}

darkBtn.onclick =function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");


    if(localStorage.getItem("theme")=="light"){
        localStorage.setItem("theme","dark")

    }
    else{
        localStorage.setItem("theme","light")
    }


}


// to make dark or light mode keeping functing even the window has refreshed


if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

}

else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");

}

else{
    localStorage.setItem("theme","light")
}




