window.addEventListener("load", sidenVises);


function sidenVises() {
    console.log("Siden vises");
    showStart();
}

//Alle click funktionerne:

function showStart() {
    document.querySelector("#start").addEventListener("click", hideStart);
    document.querySelector("#start").addEventListener("click", snappen);
    document.querySelector("#snapnoti").addEventListener("click", showSnapchat);
    document.querySelector("#snapjoachim").addEventListener("click", showTissemand);
    document.querySelector("#screenshot").addEventListener("click", screenshot);
    document.querySelector("#luksnapchat").addEventListener("click", luksnapchat);
    document.querySelector("#beskedsofie").addEventListener("click", messenger);
    document.querySelector("#beskedhanna").addEventListener("click", imessage);
    document.querySelector("#nejknap").addEventListener("click", levelComplete);
    document.querySelector("#jaknap").addEventListener("click", fatima);
    document.querySelector("#sletbillede").addEventListener("click", levelComplete);
    document.querySelector("#sendbillede").addEventListener("click", gameover);
}



//Startskærm
function hideStart() {
    console.log("Hide start");
    document.querySelector("#logo").classList.add("hide");
    document.querySelector("#start").classList.add("on_off");

}

//Snap fra Joakim
function snappen() {
    console.log("snappen");
    document.querySelector("#snapnoti").classList.remove("hide");
    document.querySelector("#snapnotifikationlyd").play();
    document.querySelector("#start").classList.add("fade_out");

}

//Snapchat vises
function showSnapchat() {
    document.querySelector("#snapchat").classList.remove("hide");
    document.querySelector("#snapjoachim").classList.remove("hide");

}
//Joakims snap vises
function showTissemand() {
    document.querySelector("#tissemand").classList.remove("hide");

}

//Tag screenshot og gå tilbage til låsskærmen af mobilen og vis besked fra Sofie samt Joakim
function screenshot() {
    console.log("screenshot");
    document.querySelector("#snapjoachim").removeEventListener("click", showTissemand);
    document.querySelector("#tissemand").classList.add("hide");
    document.querySelector("#beskedjoachim").classList.remove("hide");
    document.querySelector("#screenshot").classList.add("hide");
    document.querySelector("#luksnapchat").classList.add("hide");
    document.querySelector("#snapchat").classList.add("hide");
    document.querySelector("#snapnoti").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#messengernotifikationlyd").play();
    document.querySelector("#beskedsofie").classList.remove("hide");
    document.querySelector("#beskedsofie").classList.add("pulse");

}

//Luk snapchat og gå tilbage til låsskærmen af mobilen og vis besked fra Hanna
function luksnapchat() {
    document.querySelector("#snapjoachim").removeEventListener("click", showTissemand);
    document.querySelector("#tissemand").classList.add("hide");
    document.querySelector("#screenshot").classList.add("hide");
    document.querySelector("#luksnapchat").classList.add("hide");

    document.querySelector("#snapchat").classList.add("hide");
    document.querySelector("#snapnoti").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#smsnotifikationlyd").play();
    document.querySelector("#beskedhanna").classList.remove("hide");


}

//Imessage samtale
function imessage() {
    document.querySelector("#beskedhanna").classList.add("hide");
    document.querySelector("#beskederhanna").classList.remove("hide");
}


//Messenger samtale
function messenger() {
    document.querySelector("#beskedsofie").classList.add("hide");
    document.querySelector("#beskedjoachim").classList.add("hide");
    document.querySelector("#messengersofie").classList.remove("hide");

}

//Level Complete
function levelComplete() {
    console.log("level complete");
    document.querySelector("#beskederhanna").classList.add("hide");
    document.querySelector("#messengersofie").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("hide");

}
//Game Over
function gameover() {
    console.log("gameover");
    document.querySelector("#beskederhanna").classList.add("hide");
    document.querySelector("#messengersofie").classList.add("hide");
    document.querySelector("#gameover").classList.remove("hide");

}

//Fatima's billede
function fatima() {
    document.querySelector("#messengersofie").classList.add("hide");
    document.querySelector("#fatima").classList.remove("hide");

}
