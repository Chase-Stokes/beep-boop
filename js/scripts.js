function containsOneToThree(input) {
  const oneToThree = ["1", "2", "3"]
  let inputArray = input.split("");
  for (let i=0; i < oneToThree.length; i++) {
    if (inputArray[i] === oneToThree[i]) {
      return true;
    }
  };
  return false;
}

function beepBoop(input) {
  let inputArray = input.split("");
  let beepBoopArray = [];
  for (let i=0; i < inputArray.length; i++){
    if (inputArray.includes === "3") {
      beepBoopArray.push("Wont you be my Neighbor");
    }else if (inputArray.includes === "2") {
      beepBoopArray.push("boop");
    }else if (inputArray.includes === "1") {
      beepBoopArray.push("beep");
    }else {
      beepBoopArray.push(i)
    }
  } 
  return beepBoopArray;
}