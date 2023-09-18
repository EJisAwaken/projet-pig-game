let dice = document.querySelectorAll(".dice img");
let etat = document.querySelectorAll(".etat");
let scoreT = document.querySelectorAll(".scoreT");
let recommencer = document.querySelector("#newGame");
let  diceRoll= document.querySelectorAll(".imgRollDice");
let hold = document.querySelectorAll(".imgHold img");
let currentN = document.querySelectorAll(".currentNumber");
let dices = ["Illustration/one.png", "Illustration/two.png", "Illustration/tree.png",
"Illustration/four.png", "Illustration/five.png", "Illustration/six.png"];
let pointC1 =0; // Ce sont les point qui ne sont pas encore validé par le joueurs
let pointC2 =0;
let pointT1 =0;
let pointT2 =0;

console.log(pointC1);
// Créé des chiffre aleatoire pour le premier joueur
function changeDice1() {
    let random1 = Math.floor(Math.random()*dices.length);
        dices.forEach(function (item, index) {
            if (random1 === index){
                dice[0].src = item;
                dice[0].classList.toggle("animDice");
                setInterval(function () {
                    dice[0].classList.remove("animDice");
                }, 1200);
                pointC1 = pointC1 + index+1;
                currentN[0].innerHTML = pointC1;
                if (random1 ===0){
                    pointC1 = 0;
                    currentN[0].innerHTML=pointC1;
                    diceRoll[0].addEventListener("click", function () {
                        alert("c'est pas votre tour");
                        pointC1 = 0;
                        currentN[0].innerHTML=pointC1;
                        diceRoll[0].style.display ="none";
                        diceRoll[1].style.display ="block";
                    })
                }

                recommencer.addEventListener("click", function () {
                    pointC1 = 0;
                    currentN[0].innerHTML=pointC1;
                    scoreT[0].innerHTML=pointC1;
                    etat[0].style.display = "none";
                    etat[1].style.display = "none";

                });

                hold[0].addEventListener("click", function () {
                    pointT1 += pointC1;
                    scoreT[0].innerHTML=pointT1;
                    pointC1 = 0;
                    currentN[0].innerHTML=pointC1;

                });

                if (pointT1 >=20){
                    etat[0].innerHTML = "(Vous avez gagner)";
                    etat[0].style.color = "green";
                    etat[1].innerHTML = "(Vous avez perdu)";
                    etat[1].style.color = "red";
                }
                console.log(pointT1);
            }
        })
}


// Créé des chiffre aleatoire pour la deuxieme joueur
function changeDice2() {
    let random2 = Math.floor(Math.random()*dices.length);
        dices.forEach(function (item, index) {
            if (random2 === index){
                dice[1].src = item;
                dice[1].classList.add("animDice");
                setInterval(function () {
                    dice[1].classList.remove("animDice");
                }, 1200);
                pointC2 = pointC2 + index+1;
                currentN[1].innerHTML = pointC2;
                if (random2 ===0){
                    pointC2 = 0;
                    currentN[1].innerHTML =pointC2;
                    diceRoll[1].addEventListener("click", function () {
                        alert("c'est pas votre tour");
                        pointC2 = 0;
                        currentN[1].innerHTML = pointC2;
                        diceRoll[1].style.display ="none";
                        diceRoll[0].style.display ="block";
                    })
                }

                recommencer.addEventListener("click", function () {
                    pointC2 = 0;
                    currentN[1].innerHTML =pointC2;
                    scoreT[1].innerHTML=pointC2;
                    etat[0].style.display = "none";
                    etat[1].style.display = "none";

                });

                hold[1].addEventListener("click", function () {
                    pointT2 += pointC2;
                    scoreT[1].innerHTML=pointT2;
                    pointC2 = 0;
                    currentN[1].innerHTML=pointC2;
                });

                if (pointT2 >=20){
                    etat[1].innerHTML = "(Vous avez gagner)";
                    etat[1].style.color = "green";
                    etat[0].innerHTML = "(Vous avez perdu)";
                    etat[0].style.color = "red";
                }
            }
        })
}
diceRoll[0].addEventListener("click", changeDice1);
diceRoll[1].addEventListener("click", changeDice2);


// Fonction qui va envoyé la reponse vers total



