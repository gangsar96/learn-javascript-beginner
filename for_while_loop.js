const names = ["Yogs", "John", "Maria", "Eliza", "Burrito", "Harry", "Potter"];

//for looping
for (name of names) {
  console.log(name);
  if (name === "Maria") {
    console.log("Maria is in my list!");
    break;
  }
}

//while loop

let loading = 0;
while (loading < 100) {
  console.log("Website is still loading");

  loading++;
}
