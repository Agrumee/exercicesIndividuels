
function getLatinCharacterList(mot) {
    let array = []
    for (char of mot) {
        array.push(char)
    }
    return array
}


function translateLatinCharacter(char) {
    if (char == ' ') {
        return ' '
    } else {
        return latinToMorse[char]
    }
}

console.log(translateLatinCharacter('A'))

function encode() {
    let traduction = ""
    let blabla = document.getElementById('phrase').value
    let array = getLatinCharacterList(blabla)
    for (character of array) {
        character = character.toUpperCase()
        traduction += translateLatinCharacter(character) + " "
    }
    document.getElementById('Version').innerHTML = traduction
    document.getElementById('phrase').value = ""
}

//console.log(encode(string))

function translateMorseCharacter(character) {
    return morseToLatin[character]
}

// console.log(translateMorseCharacter('...'))

function getMorseCharacterList(word) {
    let array = word.split(' ')
    return array
}

// console.log(getMorseCharacterList('...- . ..- -..-'))

function getMorseWordList(words) {
    let array = words.split('/')
    return array
}

// console.log(getMorseWordList('.--- ./...- . ..- -..-/..- -. ./--. .-.. .- -.-. .'))

function decode() {
    let traduction = ""
    let code = document.getElementById('codeSecret').value
    let arrayOfWords = getMorseWordList(code)
    for (words of arrayOfWords) {
        console.log(words)
        traduction += " "
        let arrayOfCharacters = getMorseCharacterList(words)
        for (characters of arrayOfCharacters) {
            console.log(characters)
            if (translateMorseCharacter(characters) == undefined) {
                traduction += " "
            } else {
                traduction += translateMorseCharacter(characters)
            }
        }
    }


    document.getElementById('Traduction').innerHTML = traduction
    document.getElementById('codeSecret').value = ""
}

//.--- ./...- . ..- -..-/..- -. ./--. .-.. .- -.-. .

module.exports = { getLatinCharacterList, getMorseCharacterList, getMorseWordList, translateLatinCharacter }