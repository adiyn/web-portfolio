// exo 1
let temp = 41;
console.log(temp*(9/5)+32)

// exo 2
let lo = 5;
let la = 5;

console.log(lo*la)

// exo 3
let nom = "Jaune";
let prenom = "de BAGIRELLE";

console.log(nom+" "+prenom);

// exo 4
let HT = 5.54;
let TVA = 0.2;

console.log("prix TTC : "+(HT+(HT*TVA))+"€")

// exo 5
// oui car "true && !(false)" => true

// exo 6
let poids = 257;
let taille = 1.98;

console.log("IMC : "+(poids/(taille*taille)).toFixed(2));

// exo 7
let m_min = 25;
let m_tot = 58;

m_tot > m_min ? console.log("Livraison gratuite !") : console.log("Frais de livraison : X €");

// exo 8
let bin = "0110011100101";

console.log(bin+" = "+parseInt(bin, 2));

// exo 9
const personne = {
  prenom: String,
  nom: String,
  age: Number,
  ville: String,
};

Object.create(personne);

console.log(personne);

// exo 10
let personList = [{
  prenom: "John",
  nom: "Doe",
  age: 25,
  ville: "Rouen"
}, {
  prenom: "Jane",
  nom: "Doe",
  age: 30,
  ville: "Paris"
},{ prenom: "Jim",
  nom: "Doe",
  age: 35,
  ville: "Caen"
}]

personList.forEach( (person) =>
  console.log(person.prenom, person.nom, person.age, person.ville)
);

// exo 11
personList.push({prenom: "Marc", nom: "Doe", age: 32, ville: "Marseille"});
personList.forEach( (person) =>
  console.log(person.prenom, person.nom, person.age, person.ville)
);

console.table(personList);

// exo 12
personList[0].prenom="Jean";
personList.splice(1,1);
personList.forEach( (person) =>
  console.log(person.prenom, person.nom, person.age, person.ville)
);

console.table(personList);

// exo 13
let table = Array.from(Array(10).keys());
console.log(table[0], table[table.length-1], table.length);

// exo 14
let table2 = table.map( value => (value+1)*10);
console.log(table2);
console.log(table2.reverse())

// exo 15
let table_shuffled = Array.from(Array(10).keys()).sort(() => Math.random() - 0.5);
console.log(table_shuffled);
let sorted = table_shuffled.sort()
console.log(sorted);

// exo 16
sorted.push(11);
console.log(sorted);
sorted.unshift(0);
console.log(sorted);
sorted.pop();
console.log(sorted);