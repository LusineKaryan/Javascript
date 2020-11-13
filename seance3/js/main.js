let drawer = parseInt(prompt("choisissez le tiroir à ouvrir (1 à 4) :"));

switch (drawer) {
    case 1:
        alert("contiens divers outils pour dessiner : du papier, des crayons, etc");
        break;
    case 2:
        alert("contient du matériel informatique");
        break;
    case 3:
        alert("ah? Ce tiroir est fermé à clé !");
        break;
    case 4:
        alert("contiet des vetement");
        break;
    default:
        alert("le meuble ne contient que 4 tiroirs");
}