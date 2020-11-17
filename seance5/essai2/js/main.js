let query = document.querySelector('#menu .item span');
alert(query.innerHTML); //Affiche Elément 1

let queryAll = document.querySelectorAll('#menu .item span');
alert(queryAll.length); //Affiche 2

alert(queryAll[0].innerHTML + '-' +  queryAll[1].innerHTML); 
//Affiche Elément 1 - Elément 2