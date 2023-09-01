function sapin(nombre) {
    let sommet = "+"
    let etoile = "*"
    let left = "/"
    let rigth = "\\"
    let tronc = "#"
    let ampoule = "+"
    let boule = "o"
    let branche = "*"
    let arbre = ""
    document.getElementById("sapin").innerHTML += sommet + "<br>"
    document.getElementById("sapin").innerHTML += left + branche + rigth + "<br>"
    for (let i = 1; i < nombre-1; i++) {
        branche += etoile + etoile
        arbre = left + branche + rigth
        if (arbre.length >= 5) {
            var min = 2;
            var max = arbre.length - 2;
            var randomA = Math.floor(Math.random() * (max - min) + min);
            var randomB = Math.floor(Math.random() * (max - min) + min);
            arbre = arbre.split("")
            arbre.splice(randomA, 1, ampoule)
            arbre.splice(randomB, 1, boule)
            arbre = concatenation(arbre)
            console.log(arbre)
        }

        console.log(arbre.length)
        document.getElementById("sapin").innerHTML += arbre
        document.getElementById("sapin").innerHTML += "<br>"

        if (i % 2 == 0 && i != 0) {
            document.getElementById("sapin").innerHTML += arbre + "<br>"
        }
    }
    if (arbre.length <= 7) {
        document.getElementById("tronc").innerHTML = tronc
    } else if (nombre <= 11) {
        tronc = "## <br> ##"
        document.getElementById("tronc").innerHTML = tronc
    } else {
        tronc = "## <br> ## <br> ##"
        document.getElementById("tronc").innerHTML = tronc
    }
}


function concatenation(tab) {
    let string = ""
    for (let i of tab) {
        string += i
    }
    return string
}

// let tab=["zoé","toto", "tata"]

// console.log(concatenation(tab))

let askNumber = window.prompt("Combien d'étages voulez-vous ajouter à votre sapin ?")

sapin(askNumber)