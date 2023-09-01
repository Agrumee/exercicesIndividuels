let pileOfMatches = 50

function takeMatches (numberOfMatches) {
    return pileOfMatches-numberOfMatches
}

function askNumberOfMatches(){
    let numberOfMatches = document.getElementById("input").valueAsNumber
    return numberOfMatches
}

function gamePlay(){
    console.log("entreici")
    let numberOfMatches = askNumberOfMatches()
    while(pileOfMatches <= 0){
        document.getElementById("pileOfMatches").innerText = takeMatches(numberOfMatches)

        if(pileOfMatches<=0){
            document.body.innerText="Félicitation vous avez gagné !"
        }
    }
}