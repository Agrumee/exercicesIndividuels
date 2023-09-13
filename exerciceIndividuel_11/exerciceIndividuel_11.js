function decoupeChaine(string) {
    let array = []
    let bloc = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[i - 1] && i != 0) {
            array.push(bloc);
            bloc = "";
        }
        bloc += string[i];
    }
    array.push(bloc);
    let result = array.toString()
    return result.replaceAll(",", " ")
}

console.log(decoupeChaine("11"))

function decritChaine(string) {
    let array = string.split(" ")
    let bloc = []
    for (let i = 0; i < array.length; i++) {
        bloc.push(array[i].length + (array[i])[0])
    }
    let result = bloc.toString()
    return result.replaceAll(",", "")
}

console.log(decritChaine("aa"))

function suiteConway(carac, n) {
    if (n > 0) {
        document.body.innerHTML += "<p>" + carac.replaceAll(" ", "") + "</p>"
        carac = decoupeChaine(decritChaine(carac))
        n--
        suiteConway(carac, n)
    }
}

suiteConway("1", 8)