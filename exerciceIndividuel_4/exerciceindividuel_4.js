// Etape 1

code = "Hello World !"

function getLatinCharacterList(){
    for(i of code){
        console.log(i)
    }
}

// getLatinCharacterList()

//Etape 2

let character = window.prompt("Indiquez la lettre à encoder en morse, en majuscule","A, B, C, D... W, X, Y, Z")

function translateLatinCharacter(character){
    console.log(latinToMorse[character])
}

// translateLatinCharacter(character)

//Etape 3

// let string = window.prompt("Indiquez votre chaîne de caractère en majuscule à encoder", "BONJOUR")

// function getLatinCharacterList(string){
//     for(let i of string) {
//         encode(i)
//     }
// }

// function encode(i){
//     console.log(latinToMorse[i])
// }

// getLatinCharacterList(string)
