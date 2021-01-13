document.querySelector("#samba").innerHTML = '<i style="color:blue;" class="fas fa-arrow-circle-right"></i>'

$(".rate").on("click", function() {
  $("h3").text("Perdu !")
})
$(".gagne").on("click", function() {
  $("h3").text("Bien joué !")
})

var score = 0

$(".gagne").on("click", function() {
  score++
  $(".scoreFinal").text("Votre score est de  " + score + " sur 5")
})
