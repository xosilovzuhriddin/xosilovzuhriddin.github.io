"use strict"

setInterval(Crateinstagram,10)
function Crateinstagram() {
    const instagram = document.createElement("i");
    instagram.classList.add('fab');
    instagram.classList.add('fa-instagram');

    instagram.style.left = Math.random()*window.innerWidth+"px";
    instagram.style.animationDuration = Math.random()*3+2+2+"s";
    instagram.style.fontSize = Math.random()*10+10+"px"
    instagram.style.opacity = Math.random();

    document.body.append(instagram);

    setTimeout(
        ()=>{
            instagram.remove(3)
        }
        ,4000
    )
}

setInterval(Cratefacebook,10)
function Cratefacebook() {
    const facebook = document.createElement("i");
    facebook.classList.add('fab');
    facebook.classList.add('fa-facebook');

    facebook.style.left = Math.random()*window.innerWidth+"px";
    facebook.style.animationDuration = Math.random()*3+2+2+"s";
    facebook.style.fontSize = Math.random()*10+10+"px"
    facebook.style.opacity = Math.random();
    
    document.body.append(facebook);

    setTimeout(
        ()=>{
            facebook.remove(3)
        }
        ,4000
    )
}
setInterval(Cratetwitter,10)
function Cratetwitter() {
    const twitter = document.createElement("i");
    twitter.classList.add('fab');
    twitter.classList.add('fa-twitter');

    twitter.style.left = Math.random()*window.innerWidth+"px";
    twitter.style.animationDuration = Math.random()*3+2+2+"s";
    twitter.style.fontSize = Math.random()*10+10+"px"
    twitter.style.opacity = Math.random();

    document.body.append(twitter);

    setTimeout(
        ()=>{
            twitter.remove(3)
        }
        ,4000
    )
}

setInterval(Crategoogle,10)
function Crategoogle() {
    const google = document.createElement("i");
    google.classList.add('fab');
    google.classList.add('fa-google');

    google.style.left = Math.random()*window.innerWidth+"px";
    google.style.animationDuration = Math.random()*3+2+2+"s";
    google.style.fontSize = Math.random()*10+10+"px"
    google.style.opacity = Math.random();

    document.body.append(google);

    setTimeout(
        ()=>{
            google.remove(3)
        }
        ,4000
    )
}