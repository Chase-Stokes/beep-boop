function containsOneToThree(input) {
  const oneToThree = ["1", "2", "3"]
  let inputArray = input.split("");
  for (let i=0; i < oneToThree.length; i++) {
    if (input === oneToThree[i]) {
      return true;
    }else if (input[0] === oneToThree[i]) {
      return true;
    }else if (input[1] === oneToThree[i]) {
      return true;
    }else if (input[2] === oneToThree[i]) {
      return true;
    }else if (input[3] === oneToThree[i]) {
      return true;
    }
  };
  return false;
};

function beepBoop(input) {
  let inputArray = input.split("");
  let beepBoopArray = [];
  for (let i =1; i <= inputArray.length; i++) {
    if (containsOneToThree(input)) {
      beepBoopArray.push("beep");
    }else {
      beepBoopArray.push(input);
    }
  }; 
  return beepBoopArray;
}
  

//inputArray.forEach(function(element)

/*if (!containsOneToThree(input)) {
  beepBoopArray.push(input);
}else if (containsOneToThree(input)) {
  beepBoopArray.push("Wont you be my Neighbor");
}else if (containsOneToThree(input)) {
  beepBoopArray.push("boop");
}else if (containsOneToThree(input)) {
  beepBoopArray.push("beep");
}else {
  beepBoopArray.push(input);
}*/