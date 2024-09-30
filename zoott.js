function zoo(herbivore, weight, predator) {
  if ((herbivore = true || weight < 50) && !predator) {
    console.log("The animal is allowed in the open area");
  } else {
    console.log("The animal is NOT allowed in the open area.");
  }
}
zoo(true, 36, true);
