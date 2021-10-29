function beepBoop(input) {
  let beepBoopArray = [];
  for (let i=0; i < input.length; i++){
    if (input.includes === "3") {
      beepBoopArray.push("Wont you be my Neighbor");
    }else if (input.includes === "2") {
      beepBoopArray.push("boop");
    }else if (input.includes === "1") {
      beepBoopArray.push("beep");
    }else {
      beepBoopArray.push(i)
    }
  } 
  return beepBoopArray;
}