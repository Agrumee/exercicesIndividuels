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


// function getMorseCharacterList(code){
//     for(let i of code) {
//         if(i == "/"){
//             console.log(" ")
//         }
//         else if(i == "." || i == "-"){
//             character = i + i
//             decode(character)
//         }
//         else if (i == " "){
//             character = 0
//         }
//     }
// }



let code = window.prompt("Entrez le code que vous souhaitez décoder, séparer chaque caractère par un espace et chaque mot par un /", "... --- ...")
//let newcode = code.replaceAll('/', ' ')

function decode(characters) {
    console.log(morseToLatin[characters])
}

function getMorseCharacterList(code) {
    const delimiter = "/"
    word = code.split(delimiter)
    console.log(word)
    for (i of word) {
        const delimiterCharacter = " "
        character = i.split(delimiterCharacter)
        console.log(character)
        for (j of character) {
            decode(j)
        }
    }
}

getMorseCharacterList(code)


// .--- ./...- . ..- -..-/..- -. ./--. .-.. .- -.-. .