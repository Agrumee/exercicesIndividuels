function tryWord(word, base) {
  let wellPlaced = [];
  let notInWord = [];
  let missplaced = [];

  if (word.length === base.length) {
    let arrayBase = base.split('');
    let arrayWord = word.split('');

    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] === arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else if (arrayBase.includes(arrayWord[i]) === true) {
        missplaced.push(arrayWord[i])
      }
    }

    for (const char of arrayWord) {
      if (arrayBase.includes(char) === false) {
        notInWord.push(char)
      }
    }
  }
  return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
}

function baseLength(){
  let base = 'dictionnaire'
  document.getElementById("longueur").innerText = base.length
  return base
}

function mot(){
  let word = document.getElementById("word").value
  return word
}

function guess() {
  let base = baseLength()
  let word = mot()
  word = word.toLowerCase()
  let result = tryWord(word, base)
  document.getElementById("word").value = ''
  document.getElementById("try").innerText = word
  document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
  document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(', ')
  document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
  if (result.wellPlaced.length === base.length) {
    document.getElementById("win").innerText = 'Vous avez gagné'
  }
}

module.exports = {tryWord, guess, baseLength, mot}