// # Exercice 6
//     - # 1°
//         - ## Supprimer le dernier élément de l'array
    let monTab = ['pomme', 'fraise', 'melon', 'citron'];
monTab.pop();
console.log(monTab);
//         - ## Supprimer le premier élément de l'array
monTab.shift();
console.log(monTab);
//         - ## Ajouter un élément a la fin de l'array
monTab.push('pasteque');
console.log(monTab);
//         - ## Ajouter un élément au debut de l'array
monTab.unshift('banane');
console.log(monTab);
//         - ## Mettre le deuxième élément en majuscule 
monTab[1] = monTab[1].toUpperCase();
console.log(monTab);

//         - ## Changer l'ordre de l'array
monTab.reverse();
console.log(monTab);

//     - # 2°
//         - ## Ordonner les chiffres
    let chiffres = [4, 5, 2, 1, 3];

//         - ## Première methode (Ordonner)
//         - ## 1, 2, 3, 4, 5
chiffres.sort();
console.log(chiffres);

//         - ## Deuxième methode (Concatenation)
//         - ## 1-2-3-4-5
chiffres = (chiffres.join('-'));
console.log(chiffres);
//         - ## Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau
chiffres = chiffres.split('-');
console.log(chiffres);
//         - ## Afficher l'array avec les chiffres ordonnées


//     - # 3°
//         - ## Créez un tableau vide

    var valentin = [];

//         - ## Ajouez 10 élément dans votre array
valentin.push('vert', 'rouge', 'orange', 'mauve', 'rose', 'blanc', 'noir', 'gris', 'jaune', 10);

//         - ## Affichez le contenu de l'array et sa taille
console.log(valentin);
console.log(valentin.length);

//         - ## Touvez l'index de chaque éléments
console.log(valentin.indexOf('vert'));
console.log(valentin.indexOf('rouge'));
console.log(valentin.indexOf('orange'));

    let objets = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5'];

//         - ## Utiliser une methode qui permet de supprimer un element grâce à l'index
objets.splice(objets.indexOf('objet 2'), 1);
console.log(objets);