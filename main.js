var cognomi = ["BIANCHI ", "ROSSI ", "VERDI ", "PERLARI ", "MASTROBATTISTA ", "LODIGIANI "]

var cognome = prompt("Inserire cognome").toUpperCase();

cognomi.push((cognome + " "));

cognomi.sort();

var indiceUmano = parseInt(cognomi.indexOf((cognome + " ")) + 1);

console.log(cognomi, indiceUmano);

if (isNaN(cognome)) {
  document.getElementById("cognomi").innerHTML = cognomi;

  document.getElementById("posizione").innerHTML = indiceUmano;

} else {
  alert("Il cognome non può consistere di soli numeri");
}
