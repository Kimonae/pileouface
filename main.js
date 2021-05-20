const btn = document.getElementById("btn");
var result = document.getElementById("result");

btn.addEventListener("click", headsOrTails());

function headsOrTails() {
  var random = Math.floor(Math.random() * 2);

  if (random == 0) {
         result.innerHTML = "Tail";
         } else result.innerHTML = "Head";

  console.log(random);
}
