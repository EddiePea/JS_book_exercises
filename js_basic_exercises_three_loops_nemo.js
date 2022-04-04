let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

for (i = 0; i < fish.length; i += 1) {
   if (i === 4) {
   break; 
 } else {
   console.log(fish[i]);
 }
}

for (i = 0; i < fish.length; i += 1) {
  console.log(fish[i]);

  if (fish[i] === 'Nemo') {
    break;
  }
}