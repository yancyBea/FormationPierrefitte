document.write("hello");

var temperature = 9;
if (temperature <= 9){
 document.write('il fait froid');
}else{
 document.write('il fait chaud');
}

document.write("<table>");
for (var i = 1; i <= 10; i++) {
 document.write("<tr>"); /* début de ligne */

 for (var j = 1; j <= 10; j++) {
   document.write("<td>");
   document.write(i * j);
   document.write("</td>");
 }
 document.write("</tr>"); /* fin de ligne */
}
document.write("</table>");