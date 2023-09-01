const {getLatinCharacterList} = require('./exerciceindividuel_4.js');

test('retourne tableau de caractères latins', () => {
  expect(getLatinCharacterList("mot")).toEqual(["m", "o", "t"]);
});

test('retourne tableau de caractères latins', () => {
  expect(getLatinCharacterList("jour")).toEqual(["j", "o", "u", "r"]);
});


const {getMorseCharacterList} = require('./exerciceindividuel_4.js');

test('retourne tableau de caractères morses', ()=>{
  expect(getMorseCharacterList("--. .-.. .- -.-. .")).toEqual(["--.", ".-..", ".-", "-.-.", "."])
})


const {getMorseWordList} = require('./exerciceindividuel_4.js');

test('découpe la phrase en mots et retourne-les dans un tableau', ()=>{
  expect(getMorseWordList(".--- ./...- . ..- -..-/..- -. ./--. .-.. .- -.-. .")).toEqual([".--- .","...- . ..- -..-", "..- -. .","--. .-.. .- -.-. ."])
})


// const {translateLatinCharacter} = require('./exerciceindividuel_4.js');

// test('traduit un caractère latin en morse', ()=>{

// })

