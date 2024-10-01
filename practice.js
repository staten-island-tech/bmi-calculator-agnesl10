function zoo(herbivore, weight, predator) {
  if ((herbivore = true || weight < 50) && !predator) {
    console.log("The animal is allowed in the open area");
  } else {
    console.log("The animal is NOT allowed in the open area.");
  }
}
zoo(true, 36, true);

function residency(age, resident, membership) {
  if (age < 12 || age >= 65 || resident || membership) {
    console.log("The person is qualified for the discount.");
  } else {
    console.log("The person is NOT qualified for the discount.");
  }
}
residency(11, 60, false, false);
