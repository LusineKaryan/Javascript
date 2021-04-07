//Définition de l'objet person
function Person(nick, age, sex, parent, work, friends){
    this.nick = nick;
    this.age = age;
    this.sex = sex;
    this.parent = parent;
    this.work = work;
    this.friends = friends;

    this.addFriend = function(nick, age, sex, parent, work, friends){
        this.friends.push(new Person(nick, age, sex, parent, work, friends))
    }
};
// On crée des variables qui vont contenir une instance de l'objet Person:
let seb = new Person('Sebastien', 25, 'm','ainé','Développeur', [])
let lau = new Person('Laurence', 19,'f','soeur','Sou-officier', [])

alert(seb.nick); //affiche Sebastien
alert(seb.nick + ' et ' + lau.nick); //affiche Sebastien et Laurence
alert(lau.nick); //affiche Laurence

seb.nik = 'Bastien';
alert(seb.nick);


let PersonArray = [
    new Person('Sébastien', 23, 'm', 'aîné', 'Développeur', []),
    new Person('Laurence', 19, 'f ', 'soeur', 'Sous-officier', []),
    new Person('Ludovic', 9, 'm', 'frère', 'Etudiant', []),
    new Person('Pauline', 16, 'f ', 'cousine', 'Etudiante', []),
    new Person('Guillaume', 16, 'm', 'cousin', 'Dessinateur', []),
];

seb.friends.push(new Person('Johnatan','19','m','ainé','Développeur',[]));
seb.friends.push(new Person('Eric','20','m','ainé','Développeur',[]));
seb.friends.push(new Person('Thomas','19','m','ainé','Développeur',[]));

alert(seb.friends[1].nick); //Affiche Eric

seb.addFriend('William','19','m','ainé','Développeur',[]);

alert(seb.friends[3].nick + ' ' + seb.friends[3].age + " ans");
//Affiche William 19 ans

let fruitArray = [];
fruitArray.push('Orange');

//On définit un objet Chien
function chien(name, color, age, size){
    this.name = name;
    this.color = color;
    this.age = age;
    this.size = size;

   // this.AddSize = function(size){
   //     this.size.push(size);
   // };
}

chien.prototype.AddSize = function(size){
         this.size.push(size);
    };

// On crée des variables qui vont contenir une instance de l'objet Chien
let labrador = new chien('Wil', 'sable',3,[]);
let patou = new chien('Ben','blanc',2,[])

alert(labrador.name + ' ' + patou.name);

labrador.AddSize('15'); //premier visite vétérinaire
labrador.AddSize('17'); // deuxieme visite vétérinaire
labrador.AddSize('18'); // troisieme visite vétérinaire
alert(labrador.size[0]); //Affiche15

labrador.size[0] = '14';
labrador.age = '4';
alert(labrador.size[0]); //Affiche14


let number = 4, text = '4', result;
result = number == text;
alert(result); // Affiche « true » alors que « number » est un nombre et « text » une chaîne de caractères; 
// result = number === text; alert(result) Affiche « false » car cet opérateur compare aussi les types des variables en plus de leurs valeurs