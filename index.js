let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeTitle = document.getElementById("home-title")
let guestTitle = document.getElementById("guest-title")
let score1 = 0
let score2 = 0
homeScore.textContent = score1
guestScore.textContent = score2

function add1pointToHome(){
    score1 = score1 + 1
    homeScore.textContent = score1
}
function add2pointToHome(){
    score1 = score1 + 2
    homeScore.textContent = score1
}
function add3pointToHome(){
    score1 = score1 + 3
    homeScore.textContent = score1
}

function add1pointToGuest(){
    score2 = score2 + 1
    guestScore.textContent = score2

}
function add2pointToGuest(){
    score2 = score2 + 2
    guestScore.textContent = score2
}
function add3pointToGuest(){
    score2 = score2 + 3
    guestScore.textContent = score2
}
function leaderChecker(){
    if(score1 > score2){
        homeTitle.className += " leader"
        guestTitle.className = "title"
    }
    else if(score2 > score1){
        guestTitle.className += " leader"
        homeTitle.className = "title"
    }
}
setInterval(leaderChecker)
