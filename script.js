let siteVisitor = prompt("What is your name?");
//console.log("Nice to see you " + siteVisitor + "!");
alert("Nice to see you " + siteVisitor + "!");

alert("Let's play a game!");
alert(
  "How well do you know me " +
    siteVisitor +
    " ? Five questions, 5 yes/no answers "
);

let pet = prompt("Do I have a pet? ");
if (pet.toLowerCase() === "yes" || pet.toLowerCase() === "y") {
  // console.log("You're right! I have a doggy!");
  alert("You're right! I have a doggy!");
} else {
  // console.log("How could I not?! I love animals");
  alert("How could I not?! I love animals!");
}

let chrisps = prompt("Are cheese&onion Walkers my fav chrisps?");
if (chrisps.toLowerCase() === "yes" || chrisps.toLowerCase() === "y") {
  // console.log("Absolutely! They are the best!");
  alert("Absolutely! They are the best!");
} else {
  // console.log("Wroooong answer! Of course they are :)");
  alert("Wroooong answer! Of course they are :)");
}

let food = prompt("Do I like spicy food?");
if (food.toLowerCase() === "yes" || food.toLowerCase() === "y") {
  //console.log("No I don't!" + siteVisitor + " what were you thinking?!");
  alert("No I don't!" + siteVisitor + " what were you thinking?!");
} else {
  //console.log("You are absolutely right! Who said you need 3rd degree burns to enjoy your food..?!");
  alert(
    "You are absolutely right! Who said you need 3rd degree burns to enjoy your food..?!"
  );
}
