function containsOneToThree(input) {
  const oneToThree = ["1", "2", "3"]
  let inputArray = input.split("");
  for (let i=0; i < inputArray.length; i++) {
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
    if (inputArray[i] === containsOneToThree[2]) {
      beepBoopArray.push("Wont you be my Neighbor");
    }else if (inputArray[i] === containsOneToThree[1]) {
      beepBoopArray.push("boop");
    }else if (inputArray[i] === containsOneToThree[0]) {
      beepBoopArray.push("beep");
    }else {
      beepBoopArray.push(i)
    }
  } 
  return beepBoopArray;
}

  /*}else if (inputArray[1] === oneToThree[i]) {
      return true;
    }*/