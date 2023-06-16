    // je vais fractionner mes fonctions 
    // Il me faut une fonction pour retourner le secretCode défini par le J1
    // Il me faut une fonction pour retourner le givenNumber défini par le J2
    // Il me faut une fonction qui compare le givenNumber au secretCode et qui alerte le J2 pour l'orienter.
    // Cette fonction devra également afficher si le J2 à gagner. 
    // Il n'y a plus besoin de fonction gamePlay car les joueurs vont eux même lancer la première et la troisième fonction.

    let secretCode = 0
    let tentative = 0

    function chooseANumberJ1(){
        while(secretCode < 1 || secretCode > 50){
            secretCode = window.prompt("Joueur 1 : Choisis un nombre compris entre 1 et 50 pour le faire deviner au joueur 2")
        }
        return secretCode
    }


    function didIWin(){
        tentative++
        document.getElementById("nombreDeTentatives").innerHTML = tentative
        let givenNumber = document.getElementById("givenNumber").value;
        if(givenNumber>secretCode){
            alert("Ton nombre est plus grand que le code secret !");
            document.getElementById("max").innerHTML = givenNumber
        }else if(givenNumber<secretCode){
            alert("Ton nombre est plus petit que le code secret !");
            document.getElementById("min").innerHTML = givenNumber
        }else if(givenNumber == secretCode){
            document.getElementById("gamePlay").innerHTML = "Félicitations Joueur 2 ! le code secret était bien " + secretCode + "."
        }
    }


    // il faut que ma fonction intègre les différentes variantes de givenNumber dans min et max pour
    // aider l'utilisateur.
    // si givenNumer > secretCode alors j'intègre given number dans min
    // de givenNumber < secret Code alors j'intègre given number dans max