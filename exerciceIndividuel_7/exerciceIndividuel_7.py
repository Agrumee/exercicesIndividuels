tasAllumettes = 50


def pick(number):
    global tasAllumettes
    tasAllumettes -= number
    return tasAllumettes


def askNumber():
    while True:
        print("Veuillez entrer un nombre positif compris entre 0 et 6 inclus : ")
        data = int(input())
        if (data > 0) and (data <= 6):
            return data


# def play():
#     print("Le jeu des allumettes : Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.")
#     print("Joueur 1, veuillez entrer votre nom :")
#     J1=input()
#     print("Joueur 2, veuillez entrer votre nom :")
#     J2=input()
#     global tasAllumettes
#     print(tasAllumettes)
#     i=0
#     while tasAllumettes > 0:
#         if (tasAllumettes > 0) and (i % 2 == 0):
#             print("A votre tour ", J1)
#             i += 1
#             tasAllumettes = pick(askNumber())
#             print("Il reste : ", tasAllumettes, " allumettes.")
#         elif (tasAllumettes > 0) and (i % 2 != 0):
#             print("A votre tour ", J2)
#             i += 1
#             tasAllumettes = pick(askNumber())
#             print("Il reste : ", tasAllumettes, " allumettes.")

#     if (tasAllumettes == 0) :
#         if(i % 2 == 0):
#             print("Félicitations Joueur 2 : ", J2)
#             # print(J1)
#         elif (i % 2 != 0):
#             print("Félicitations Joueur 1 : ", J1)
#             # print(J2)


def chooseNumberofPlayers():
    print("Le jeu des allumettes : Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.")
    print("Veuillez entrer le nombre de joueurs :")
    numberOfPlayer = int(input())
    j=1
    nameOfPlayers =""
    for i in range(numberOfPlayer):
        print("Joueur " + str(j) + ", choisissez votre nom")
        nameOfPlayers += input() + " "
        j= j+1
    return nameOfPlayers.split()


def play(array):
    global tasAllumettes
    while tasAllumettes > 0:
        for x in array:
            print("A votre tour ", x)
            tasAllumettes = pick(askNumber())
            print("Il reste : ", tasAllumettes, " allumettes.")
            if tasAllumettes <= 0:
                print("Bravo " + x + " Tu gagnes !")
                return


print(play(chooseNumberofPlayers()))

