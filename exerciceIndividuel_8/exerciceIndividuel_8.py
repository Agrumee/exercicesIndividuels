colors = ["blue", "red", "yellow", "green", "brown", "purple", "orange", "pink"]
combinationTest = []
numberOfTurns = 12


def randomCode():
    import random
    code = [colors[random.randrange(len(colors))], colors[random.randrange(len(colors))], colors[random.randrange(len(colors))], colors[random.randrange(len(colors))]]
    return code


code = randomCode()


def verifyCombination(test):
    if test in colors:
        return test
    else:
        print("Couleur non reconnue ! les couleurs disponibles sont : blue, red, yellow, green, brown, purple, orange, pink. Choisissez en une :")
        test=input()
        verifyCombination(test)


# Je veux créer un fonction qui prend un tableau en entré, qui le compare au code et qui retourne un tableau de 2 chiffres.
# Un représentant le nombre de pions de la bonne couleur et bien placé, un réprésentant le nombre de pions de la bonne couleur mais mal placé.


def retour(combinaison):
    result = [0, 0]
    codeTest = list(code)

    for i in range(len(combinaison)):
        if combinaison[i] == codeTest[i]:
            result[0] += 1
            combinaison[i] = None
            codeTest[i] = None

    for i in range(len(combinaison)):
        if combinaison[i] is not None and combinaison[i] in codeTest:
            result[1] += 1
            codeTest[codeTest.index(combinaison[i])] = None

    return result


def guessCode():
    global combinationTest
    print("couleur 1 :")
    color1 = input()+ " "
    color1 = color1.split()
    for i in color1:
        verifyCombination(i)
    print("couleur 2 :")
    color2 = input()+ " "
    color2 = color2.split()
    for i in color2:
        verifyCombination(i)
    print("couleur 3 :")
    color3 = input()+ " "
    color3 = color3.split()
    for i in color3:
        verifyCombination(i)
    print("couleur 4 :")
    color4 = input()+ " "
    color4 = color4.split()
    for i in color4:
        verifyCombination(i)
    combinationTest = color1 + color2 + color3 + color4
    return combinationTest
    

def gamePlay():
    print("Le Mastermind ! Ce jeu se joue avec un joueur qui choisit une combinaison de couleur et un autre joueur qui doit deviner ces couleurs et dans quel ordre. Un codemaker et un codebreaker. A chaque tour, le codebreaker doit faire une proposition, le codemaker doit lui répondre en indiquant le nombre de couleurs bien placées et le nombre de bonne couleur mais mal placées.")
    print("Règles : Vous allez pouvoir proposer un code composé de deux couleurs. En réponse, l'ordinateur vous répondra sous la forme d'un tableau. Le premier chiffre indiquera le nombre de pion de la bonne couleur et bien positionné. Le second chiffre indiquera le nombre de pion de la bonne couleur mais mal placés.")        
    for i in range(numberOfTurns):
        combination = guessCode()
        if combination == code:
            print("Vous avez devinez le code : " + code[0] + " " + code[1] + " " + code[2] + " " + code[3])
            print("Félicitations !")
            return
        elif combination != code:
            print(retour(combination))
    print("Malheureusement vous n'avez pas trouvez le code dans les 12 tours impartis, vous avez perdu.")
    return
    

gamePlay()



