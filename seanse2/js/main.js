let floor = prompt("Entrez l'étage ou l'ascenceur doite se rendre (de -2 à30):");

if (floor == 0) {
    alert("Vouz vouz trouver déja au rez-de-chaussée.")
} else if (-2 <= floor && floor <= 30) {
    alert("direction l'étage n " + floor + "!");
} else {
    alert("l'étage n'existe pas")
}