// var prenom = "yancy",
//     email="jbuzeigbvujb@fffff.com",
//     mdp="ffffffffff";

// var verif= prompt("quel est votre prenom?")

//     if (verif == prenom) {

//         var pp= prompt("quel est votre email?")
//         if (pp == email){
//             var oo= prompt("quel est votre mot de passe?")
//             if ( oo == mdp){
//                 alert("bienvenue" +  prenom)
//             }
//             else{
//                 alert("erreur de saisie")
//                }
//         }
//         else{
//             alert("erreur de saisie")
//            }
//     }
 
// else{
//  alert("erreur de saisie")
// }


// EXERCICE 0
// demander deux nombres à l'utilisateur (dans deux champs distincts)
// au clic sur un bouton, afficher le résultat de la multplication
// exemple avec 4 et 5: "4 multiplié par 5 vaut 20"
// var nb1 = Number(prompt("Entrez un chiffre ")),
//     nb2 = Number(prompt("Entrez un chiffre "));
// if (nb1 && nb2){
//    alert(nb1 * nb2);
// }


// var imageUrl = prompt("entrer l'url de l'image")

// if(imageUrl){
//     document.getElementById("img").src = imageUrl
// }

// var num = Number(prompt("saisir un nombre"))
// alert("si on l'on divise" + num + "par 5, le reste de " + num % 5);

var confirmation = confirm ("change ??");
if (confirmation) {
    document.body.style.backgroundImage= "url('https://static.bandainamcoent.eu/high/one-piece/one-piece-thousand-storms/03-news/1-opts_first-anniversary.jpg')";
    document.body.style.backgroundColor = "red";
}