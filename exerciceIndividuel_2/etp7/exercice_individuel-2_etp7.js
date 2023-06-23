    // je vais fractionner mes fonctions 
    // Il me faut une fonction pour retourner le secretCode défini par le J1
    // Il me faut une fonction pour retourner le givenNumber défini par le J2
    // Il me faut une fonction qui compare le givenNumber au secretCode et qui alerte le J2 pour l'orienter.
    // Cette fonction devra également afficher si le J2 à gagner. 
    // Il n'y a plus besoin de fonction gamePlay car les joueurs vont eux même lancer la première et la troisième fonction.
    // créer un bouton qu'on peut valider avec "entré" : 

    // etp 1 : créer une variable ->
    
    // variable submit btn = document.getElementById("submitButton").innerHTML
    
    // dans le html on crée bien sur le bouton correspondant.
    
    // add eventListener : la fonciton prend en compte un évement navigateur.
    // On peut en définir plein
    // keyup défini la touche entrée
    
    // submitButton.addEventListener("keyup", function(event){
    //     console.log(event)}) 


    let secretCode = 0
    let tentative = 0

    function chooseANumberJ1(){
        while(secretCode < 1 || secretCode > 50){
            secretCode = +prompt("Joueur 1 : Choisis un nombre compris entre 1 et 50 pour le faire deviner au joueur 2")
        }
        return secretCode
    }


    function didIWin(){
        tentative++
        document.getElementById("nombreDeTentatives").innerHTML = tentative
        let givenNumber = document.getElementById("givenNumber").valueAsNumber;
        console.log(givenNumber)
        console.log(secretCode)
        if(givenNumber>secretCode){
            alert("Ton nombre est plus grand que le code secret !");
            document.getElementById("max").innerHTML = givenNumber
        }else if(givenNumber<secretCode){
            alert("Ton nombre est plus petit que le code secret !");
            document.getElementById("min").innerHTML = givenNumber
        }else if(givenNumber == secretCode){
            document.getElementById("gamePlay").innerHTML = "Félicitations Enquêteur.ice ! le code secret était bien " + secretCode + 
            ". Maintenant, rendez-vous sur le lieu indiqué sur la carte : " + '<br> <br> <img src="Félicitations.png">';
        }
    }


    // il faut que ma fonction intègre les différentes variantes de givenNumber dans min et max pour
    // aider l'utilisateur.
    // si givenNumer > secretCode alors j'intègre given number dans min
    // de givenNumber < secret Code alors j'intègre given number dans max