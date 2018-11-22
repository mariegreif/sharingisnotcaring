window.addEventListener("load", sidenVises);

let showSettingsEffektSound = true;

function sidenVises() {
    console.log("Siden vises");
    showStart();
}

//Alle click funktionerne:

function showStart() {
    document.querySelector("#start").addEventListener("click", hideStart);
    document.querySelector("#start").addEventListener("click", snappen);
    document.querySelector("#snapnoti").addEventListener("click", lockScreen);
    document.querySelector("#snapjoachim").addEventListener("click", showTissemand);
    document.querySelector("#snapsofie").addEventListener("click", showEaster);

    document.querySelector("#knaptilbage").addEventListener("click", hideEaster);
    document.querySelector("#screenshot").addEventListener("click", screenshot);
    document.querySelector("#luksnapchat").addEventListener("click", luksnapchat);
    document.querySelector("#beskedsofie").addEventListener("click", messenger);
    document.querySelector("#beskedhanna").addEventListener("click", imessage);

    document.querySelector("#jaknap").addEventListener("click", svarhanna);
    document.querySelector("#nejknap").addEventListener("click", levelComplete);
    document.querySelector("#sletbillede").addEventListener("click", levelComplete);
    document.querySelector("#sendbillede").addEventListener("click", svarSofie);

    document.querySelector("#sfx").addEventListener("click", toggleSounds);
    document.querySelector("#tryagain1").addEventListener("click", newGame);
    document.querySelector("#tryagain2").addEventListener("click", newGame);
}

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();
    } else {
        showSettingsEffektSound = true;
        soundsOn();
    }



}

function soundsOff() {
    console.log("soundsOff");
    document.querySelector("#sfx").classList.remove("on");
    document.querySelector("#sfx").classList.add("off");

    document.querySelector("#snapnotifikationlyd").muted = true;
    document.querySelector("#smsnotifikationlyd").muted = true;
    document.querySelector("#messengernotifikationlyd").muted = true;
    document.querySelector("#screenshotlyd").muted = true;
    document.querySelector("#vibrate").muted = true;
    document.querySelector("#lock").muted = true;
    document.querySelector("#fatimadans").muted = true;


}

function soundsOn() {
    console.log("soundsOn");

    document.querySelector("#sfx").classList.remove("off");
    document.querySelector("#sfx").classList.add("on");

    document.querySelector("#snapnotifikationlyd").muted = false;
    document.querySelector("#smsnotifikationlyd").muted = false;
    document.querySelector("#messengernotifikationlyd").muted = false;
    document.querySelector("#screenshotlyd").muted = false;
    document.querySelector("#vibrate").muted = false;
    document.querySelector("#lock").muted = false;
    document.querySelector("#fatimadans").muted = false;

}


//Startskærm
function hideStart() {
    console.log("Hide start");
    document.querySelector("#logo").classList.add("hide");
    document.querySelector("#start").classList.add("on_off");
    document.querySelector("#lock").play();
    document.querySelector("#setting_effekt_sound").classList.add("hide");

}

//Snapchat notifikationslyd
function snaplyd() {
    document.querySelector("#snapnotifikationlyd").play();
    document.querySelector("#snapnotifikationlyd").duration = 1;
    document.querySelector("#snapnoti").classList.remove("hide");
    document.querySelector("#start").classList.add("hide");
}

//Vibrations lyden
function vibrate() {
    document.querySelector("#vibrate").play();
}

//Snap fra Joakim
function snappen() {
    console.log("snappen");

    setTimeout(vibrate, 1000);
    setTimeout(snaplyd, 2000);

    document.querySelector("#start").classList.add("fade_out");

}


function snapchatload1() {
    document.querySelector("#snapchatload").classList.add("fade_out");
}

function snapchatload2() {
    document.querySelector("#snapchatload").classList.remove("fade_out");
    document.querySelector("#snapchatload").classList.add("hide");
}


//Snapchat vises
function showSnapchat() {
    document.querySelector("#lockscreen4").classList.add("hide");
    document.querySelector("#knap1").classList.add("hide");
    document.querySelector("#knap2").classList.add("hide");
    document.querySelector("#knap3").classList.add("hide");
    document.querySelector("#knap4").classList.add("hide");

    document.querySelector("#snapchatload").classList.remove("hide");
    setTimeout(snapchatload1, 2000);
    setTimeout(snapchatload2, 2800);
    document.querySelector("#snapchat").classList.remove("hide");
    document.querySelector("#snapjoachim").classList.remove("hide");

}

let timeLeft = 5;

//Joakims snap vises
function showTissemand() {
    document.querySelector("#tissemand").classList.remove("hide");
    tidenGaar();

}

function joakimSMS() {
    document.querySelector("#beskedjoachim").classList.remove("hide");
    document.querySelector("#smsnotifikationlyd").play();

}

function sofieBesked() {
    document.querySelector("#beskedsofie").classList.remove("hide");
    document.querySelector("#beskedsofie").classList.add("pulse");
    document.querySelector("#beskedjoachim").classList.add("blur3");
    document.querySelector("#messengernotifikationlyd").play();

}

//Tag screenshot og gå tilbage til låsskærmen af mobilen og vis besked fra Sofie samt Joakim
function screenshot() {
    console.log("screenshot");

    document.querySelector("#tissemand").classList.remove("blur");

    document.querySelector("#screenshotlyd").play();
    document.querySelector("#snapjoachim").removeEventListener("click", showTissemand);
    document.querySelector("#tissemand").classList.add("fade_out2");
    document.querySelector("#tissemand").addEventListener("animationend", hideren);
    document.querySelector("#screenshot").classList.add("hide");
    document.querySelector("#luksnapchat").classList.add("hide");
    document.querySelector("#snapchat").classList.add("hide");
    document.querySelector("#snapnoti").classList.add("hide");
    setTimeout(vibrate, 3000);
    setTimeout(joakimSMS, 4000);
    setTimeout(sofieBesked, 8000);
    document.querySelector("#start").classList.add("hide");



}

function hideren() {

    document.querySelector("#tissemand").classList.remove("fade_out2");
    document.querySelector("#tissemand").classList.add("hide");


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
    setTimeout(hannabesked, 1500);

}

function hannabesked() {
    document.querySelector("#smsnotifikationlyd").play();
    document.querySelector("#beskedhanna").classList.remove("hide");
}



//Imessage samtale
function imessage() {
    document.querySelector("#beskedhanna").classList.add("hide");
    document.querySelector("#beskederhanna").classList.remove("hide");

    document.querySelector("#svarhanna").classList.add("hide");

    //document.querySelector("#besked_sprite").classList.remove("hide");
}

function svarhanna() {
    document.querySelector("#jaknap").classList.add("hide");
    document.querySelector("#nejknap").classList.add("hide");
    document.querySelector("#besked_sprite1").classList.add("hide");
    document.querySelector("#svarhanna").classList.remove("hide");


    setTimeout(fatima, 2000);
}

//Messenger samtale
function messenger() {


    document.querySelector("#beskedsofie").classList.remove("pulse");
    document.querySelector("#beskedsofie").classList.add("hide");
    document.querySelector("#beskedjoachim").classList.add("hide");
    document.querySelector("#messengersofie").classList.remove("hide");
    document.querySelector("#besked_sprite").classList.remove("hide");

    document.querySelector("#svarsofie").classList.add("hide");

}

function svarSofie() {
    document.querySelector("#sendbillede").classList.add("hide");
    document.querySelector("#sletbillede").classList.add("hide");
    document.querySelector("#besked_sprite").classList.add("hide");

    document.querySelector("#svarsofie").classList.remove("hide");

    setTimeout(gameOver, 2000);
}

//Level Complete
function levelComplete() {
    console.log("level complete");
    document.querySelector("#beskederhanna").classList.add("hide");
    document.querySelector("#messengersofie").classList.add("hide");
    document.querySelector("#levelcomplete").classList.remove("hide");

}
//Game Over
function gameOver() {
    console.log("gameover");
    document.querySelector("#beskederhanna").classList.add("hide");
    document.querySelector("#messengersofie").classList.add("hide");
    document.querySelector("#gameover").classList.remove("hide");
    document.querySelector("#fatima").classList.add("hide");
    document.querySelector("#fatimadans").pause();

}

//Fatima's billede
function fatima() {
    document.querySelector("#messengersofie").classList.add("hide");
    document.querySelector("#fatima").classList.remove("hide");
    document.querySelector("#fatimadans").play();
    setTimeout(gameOver, 3000);
}


function tidenGaar() {
    timeLeft--;
    console.log(timeLeft);
    if (timeLeft > 0) {
        setTimeout(tidenGaar, 1000);
    } else {
        tissemandblur();
    }
    document.querySelector("#tid").textContent = timeLeft;
}

function tissemandblur() {
    document.querySelector("#tissemand").classList.add("blur");
    document.querySelector("#screenshot").classList.remove("hide");
    document.querySelector("#luksnapchat").classList.remove("hide");
    document.querySelector("#tid").classList.add("hide");
}


function lockScreen() {
    document.querySelector("#lockscreen0").classList.remove("hide");
    document.querySelector("#knap1").classList.remove("hide");
    document.querySelector("#knap2").classList.remove("hide");
    document.querySelector("#knap3").classList.remove("hide");
    document.querySelector("#knap4").classList.remove("hide");
    document.querySelector("#knap1").classList.add("pulse");

    document.querySelector("#knap1").addEventListener("click", lockScreen2);
}

function lockScreen2() {
    document.querySelector("#lockscreen0").classList.add("hide");

    document.querySelector("#lockscreen1").classList.remove("hide");

    document.querySelector("#knap1").classList.remove("pulse");

    document.querySelector("#knap2").classList.add("pulse");

    document.querySelector("#knap2").addEventListener("click", lockScreen3);
}

function lockScreen3() {
    document.querySelector("#lockscreen1").classList.add("hide");

    document.querySelector("#lockscreen2").classList.remove("hide");

    document.querySelector("#knap2").classList.remove("pulse");

    document.querySelector("#knap3").classList.add("pulse");

    document.querySelector("#knap3").addEventListener("click", lockScreen4);
}

function lockScreen4() {
    document.querySelector("#lockscreen2").classList.add("hide");

    document.querySelector("#lockscreen3").classList.remove("hide");

    document.querySelector("#knap3").classList.remove("pulse");

    document.querySelector("#knap4").classList.add("pulse");

    document.querySelector("#knap4").addEventListener("click", lockScreen5);
}


function lockScreen5() {
    document.querySelector("#lockscreen3").classList.add("hide");

    document.querySelector("#lockscreen4").classList.remove("hide");

    document.querySelector("#knap4").classList.remove("pulse");

    setTimeout(showSnapchat, 1500);
}


function showEaster() {
    document.querySelector("#easter").classList.remove("hide");
}

function hideEaster() {
    document.querySelector("#easter").classList.add("hide");
}

function newGame() {
    location = location.href;

}
