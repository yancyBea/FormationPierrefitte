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

// var confirmation = confirm ("change ??");
// if (confirmation) {
//     document.body.style.backgroundImage= "url('https://static.bandainamcoent.eu/high/one-piece/one-piece-thousand-storms/03-news/1-opts_first-anniversary.jpg')";
//     document.body.style.backgroundColor = "red";
// }





// var Prixht= Number(prompt("saisir un prix hors taxe"));
// tva = Prixht / 100 * 20 ;
// prixTTC = tva + Prixht;
// alert(prixTTC);
// location.reload();

// var degre= Number(prompt("saisir un une temperature"));
// fahrenheigt= degre * 9 / 5 + 32;
// alert(fahrenheigt);
// location.reload();

// 6
// var jour = prompt("saisir un jour")
// if (jour == "lundi")
// {
//     alert("mardi")
// }
// if (jour == "mardi")
// {
//     alert("mercredi")
// }
// if (jour == "mercredi")
// {
//     alert("jeudi")
// }
// if (jour == "jeudi")
// {
//     alert("vendredi")
// }
// if (jour == "vendredi")
// {
//     alert("samedi")
// }
// if (jour == "samedi")
// {
//     alert("dimanche")
// }
// if (jour == "dimanche")
// {
//     alert("lundi")
// }

// switch (jour) {
//   case 'lundi':
//     console.log('mardi');
//     break;
//     case 'mardi':
//     console.log('mercredi');
//     break;
//     case 'mercredi':
//     console.log('jeudi');
//     break;
//     case 'jeudi':
//     console.log('vendredi');
//     break;
//     case 'vendredi':
//     console.log('samedi');
//     break;
//     case 'samedi':
//     console.log('dimanche');
//     break;
//     case 'dimanche':
//     console.log('lundi');
//     break;
//   default:
//     console.log("ceci n'est pas un jour");
// }

// 7
// var nombre = Number(prompt("saisir un nombre"));
// var nombre2 = Number(prompt("saisir un  autre nombre"));
// if(nombre > nombre2){
//     alert(nombre + " " + "est plus grand que" + " " + nombre2);
//     location.reload();
// }

// if(nombre == nombre2){
//     alert(nombre + " " + "est egal a" + " " + nombre2);
//     location.reload();
// }

// if(nombre < nombre2){
//     alert(nombre + " " + "est plus petit que" + " " + nombre2);
//     location.reload();
// }

// 8

// var moyenne = Number(prompt("saisir votre moyenne"));
// if (moyenne < 10){
//     alert("fiston repasse l'année prochaine");
//     location.reload();
// }

//  else if ((moyenne == 10) || (  moyenne < 12) ){
//     alert("fiston c'est bien mais tu peux mieux faire")
// }
// if (moyenne >=s 12){
//     alert("fiston c super")
// }


// 9





var heure = (prompt("Saisir une heure"));
min = (prompt("Saisir minute"));
sec = (prompt("Saisir seconde"));



//Minutes
if (min >= 0 && min <= 59) {
 min++;
//  alert("Il est " + heure + ":" + min + ":" + sec++);
} if (min >= 59) {
 heure++;
 min = 00;
//  sec = 00;
//  alert("Il est " + heure + ":" + min + ":" + sec++);
}
//Heure//
if ( heure >= 0  && heure <=23) {
//  min = 00;
//  sec = 00;
//  alert("Il est " + heure + ":" + min + ":" + sec++);
}

//secondes//
if (sec >= 0 && sec <= 59) {
    sec++;
//    sec = 00;
//   sec = 59 = min++;
   alert("Il est " + heure + ":" + min + ":" + sec++);
// } else if (sec <= 58) {
//    sec++;
//    alert("Il est " + heure + ":" + min + ":" + sec++);
}
 else if( sec >= 59){
    sec = 00;
    min++;
}