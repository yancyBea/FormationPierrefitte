///Commentaire sur une ligne

/**
 * un
 * commentaire
 * sur
 * plusieurs
 * lignes
 */

/**
 * les variables
 * Une viariable est un conteneur servant à stocker temporairement une information (ou donnée). en JavaScript on déclare une variable avec le mot clé: "var" suivi du nom de la variable, pour chaque variable doit avoir un nom unique (égalment en anglais "identifier").
 * Le nom du variable doit observer quelques règles à savoir:
 * Le d'une variable doit commencer par une lettre;
 * Le nom d'une variable ne peut contenir que des lettres (non accentuées), des chiffres ou les signes "_" et "$";
 *  Le nom d'une variable est sensible à la casse c'est à dire que "a" est différent de "A";
 * Le JavaScript possède des mots "reserver" qu'on ne peut utiliser pour créé un variable (ex: var, alert, ...).
 */

// on déclare une variable et on lui affecte immédiatement une valeur
var x = 25;
var X = 100;// Celle ci est diffente de la var "x"

//On déclare la variable plusieurs variables d'un coup 
var nom = "Lee",
prenom = "Jocker",
date = "29/10/1998";

// On declare une variable sans lui affecter de valeur, puis on lui en affecte une valeur ensuite (Non recommande).
var age;
age= 25;

// On declare une variable vide à la quelle on affecte une valeur par la suite (Non recommande).
var vile = ""
ville = "pierrefitte";

/**
 * En JavaScript le signe (=) n'est pas un opérateur d'égalité mais un opérateur d'affection c'est à dire qu'il sert à affecter (ou assigner) une valeur à une variable et va pouvoir affecter différentes valeur à une même variable dans le temps 
 */
x = x + 5;

console.log("Nos variables sont: " + x + '<br>' + X + '<br>' + nom + ' '
+ prenom + ' ' + date + '<br>' + age + '<br>' + ville);

/**
 * Les types de (valeurs de) variables
 * Les types de valeur vont avoir une influence sur notre code puisqu'on ne stockera pas de la pas même façon un chiffre ou une chaîne de caractères (un texte) par exemple dans une variable.
 * Nous ne pourrons pas non plus effectuer les mêmes opérations sur les variables selon le type de valeurs qu'elles stockent.
 * 
 * Le type number:
 * Il a representer tout nombre ou chiffre, qu'il soit positif ou negatif entier ou a virgule. Pour affecter une valeur de type number on utilise ni guillemet ou apostrosphe.
 * Attention /!\ : En programmation on utlise des notations anglo-saxonne ce qui signifie qu'il faut remplacer nos virugules par des points pour les nombres decimaux
 */

 var number = 25;
 var number = -15;
 var number = 1.09;

 /**
  * Le type string
  * Il va representer les chaines de caractères c'est à dire les textes.
  * Pour affecter une chaine de caractère a une variable il faut l'entourer avec des guillemets ou apostrophes.
  */
 var texte = "lorem ipsum";
 var desc = 'lorem ipsum';

 /**
  * Cependant si la valeur stocker contient elle même des apostrophes ou des guillemet il faudra les échapper au moyen d'un anti slash(\)
  */
var dept = "Je suis du \"9.2\""; // Je suis dans des guillemets dons j'echappe l'guillemets

var dept = 'Je suis du "9.2"';

document.write(dept + "<br>");

var dept2 = "J'habite dans le 9.2"; // Je suis dans des apostrophes dons j'echappe l'apostrophe

var dept2 = "J'habite dans le 9.2";

document.write(dept2);

/**
 * Le type boolean(booléen)
 * Un booléen en algèbre c'est une valeur binaire (soit 0 ou 1), en programmation un booléen va être soit la valeur true (vrai ou 1) soit la valeur false (faux ou 0)
 * Pour affecter un booléen à une variable on utlise ni guillemet ni apostrophe.
 */
var vrai = true;
var faux = false;

/**
 *Les autres types
 Parmi les autres valeurs possibles on peut citer la valeur "null" qui correspond a la non connaissance à priori de la valeur.  "undefined", qui correspond au fait de ne pas avoir defini de valeur pour notre variable. "NaN" qui signifie "Not a number" soit n'est pas un nombre
 */
var n = null,
u = undefined,
nn = NaN;

// /!\ NOtez qu'il est possible de changer le type de valeur d'une variable la nouvvelle écrasera tout simplement l'ancienne .
var tt = 25; // Type number
tt = true; // Type boolean
tt = 1.09; // Typenull
tt = "tt" // Type string

/**
 * Pour tester le type de la valeur on utilise généralement la méthode "typof()"
 */
alert( typeof(tt));
// declarer une variable de maniere eppxplicite ou implicite
var maVariable = 'toto'; // "maVariable" est ce qu' on appelle une écriture camel case
ma_variable = 'toto';// "ma_variable" est ce qu' on appelle une écriture snake case
// afficher dans la console
alert("je sert a afficher des données dans une boite de dialogue");
console.log("je sert a afficher des données dans la console");
// afficher dans le navigateur (page web)
document.write("je sert a afficher des données dans la page web <br>");
// demander a l' utilisateur d' entrer une valeur
prompt("je sert a afficher des données dans une boite de dialogue qui va demander a l' utilisateur de rentrer des données");


// Méthode (ou fonction) parseInt'() la methode parseInt renvoie un chiffre ou un nombre  entier a partir d'une chaine de caractere(string)
var Unchiffre = "12";
document.write(Unchiffre + '<br>');
document.write(typeof(Unchiffre) + '<br>');
Unchiffre = parseInt(Unchiffre + '<br>');
document.write(Unchiffre + '<br>');
document.write(typeof(Unchiffre) + '<br>');

//Methode(ou fonction) parseFloat
var nb_en_lettre = "12.22";
document.write(nb_en_lettre + "<br>");
document.write(typeof nb_en_lettre + "<br>");
nb_en_lettre = parseFloat(nb_en_lettre + "<br>");
document.write(nb_en_lettre + "<br>");
document.write(typeof nb_en_lettre + "<br>");

// Methode toString() qui sert a convertir en chaine de caractere
var nb_en_lettre = 258;
document.write(nb_en_lettre + "<br>");
document.write(typeof nb_en_lettre + "<br>");

nb_en_lettre = nb_en_lettre.toString();
document.write(nb_en_lettre + "<br>");
document.write(typeof nb_en_lettre + "<br>");

// alert("Hello, je me lance depuis le fichier script.js !!");
