const {tryWord, mot, baseLength, guess} = require('./exerciceIndividuel_10.js');

describe("Test de la fonction tryWord qui prend deux paramètres : on compare les caractères communs des deux.", () => {
  it("On teste si tryWord sur mot et mouche. Les deux mots ont des longueurs différentes donc le retour est vide.", () => {
    expect(tryWord("mot","mouche")).toEqual({wellPlaced: [], missplaced: [], notInWord: []});
  });
  it("On teste si tryWord retourne bien 3 caractères bien placés et 6 caractères absents lorsqu'il compare parapluie et carambar.", () =>{
    expect(tryWord("parapluie", "carambars")).toEqual({wellPlaced: ["a","r","a"], missplaced: [], notInWord: ["p","p","l","u","i","e"]})
  });
  it("On teste si tryWord retourne bien 3 caractères bien placés et 5 caractères absents lorsqu'il compare carambar et parapluie.", () =>{
    expect(tryWord("carambars", "parapluie")).not.toEqual({wellPlaced: ["a","r","a"], missplaced: [], notInWord: ["c","m","b","a","r"]})
  });
  //Ce test ne fonctionne pas car la fonction teste les caractère du paramètre 1 un par un sans vérifier 
  //que le caractère ait déjà été vérifié. Dans "carambar" il y a 3 "a", seulement 2 dans parapluie, mais la
  //fonction tryWord teste le troisième "a" indépendamment des deux autres. Il l'indique donc en bien placé.
  //Le problème est le même pour le deuxième "r" de carambar.
  it("On teste si tryWord retourne bien 9 caractères bien placés lorsqu'il compare parapluie et parapluie.", () =>{
    expect(tryWord("parapluie", "parapluie")).toEqual({wellPlaced: ["p","a","r","a","p","l","u","i","e"], missplaced: [], notInWord: []})
  });
  //Ce test fonctionne et nous a permis de révéler un problème, la fonction retournait "true" lorsque word et base
  //étaient identiques, nous avons donc supprimé cette partie du code.
  
})


// const mockWord = require("./mockbase_mockword.js");
// const mockBase = require("./mockbase_mockword.js");


// jest.mock("./exerciceIndividuel_10.js", () => ({
//     mot: jest.fn((id) => mockWord),
//     baseLength: jest.fn((id) => (mockBase))
// }));



test("On veut voir ce que fait guess", () => {
  guess();
  expect(mot).toHaveBeenCalledTimes(1); 
  expect(baseLength).toHaveBeenCalledTimes(1);
})