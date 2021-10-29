function containsOne(input) {
  const one = ["1"]
  let inputArray = input.split("");
  for (let i=0; i < one.length; i++) {
    if (input === one[i]) {
      return true;
    }else if (input[0] === one[i]) {
      return true;
    }else if (input[1] === one[i]) {
      return true;
    }else if (input[2] === one[i]) {
      return true;
    }else if (input[3] === one[i]) {
      return true;
    }else {
      break;
    }
  };
  return false;
};

function containsTwo(input) {
  const two = ["2"]
  let inputArray = input.split("");
  for (let i=0; i < two.length; i++) {
    if (input === two[i]) {
      return true;
    }else if (input[0] === two[i]) {
      return true;
    }else if (input[1] === two[i]) {
      return true;
    }else if (input[2] === two[i]) {
      return true;
    }else if (input[3] === two[i]) {
      return true;
    }else {
      break;
    }
  };
  return false;
};

function containsThree(input) {
  const three = ["3"]
  let inputArray = input.split("");
  for (let i=0; i < three.length; i++) {
    if (input ===three[i]) {
      return true;
    }else if (input[0] === three[i]) {
      return true;
    }else if (input[1] === three[i]) {
      return true;
    }else if (input[2] === three[i]) {
      return true;
    }else if (input[3] === three[i]) {
      return true;
    }else {
      break;
    }
  };
  return false;
};


function beepBoop(input) {
  let inputArray = input.split("");
  let beepBoopArray = [];
  for (let i =1; i <= inputArray.length; i++) {
    if (containsThree(input)) {
      beepBoopArray.push("Won't you be my neighbor?");
    }else if (containsTwo(input)) {
      beepBoopArray.push("boop");
    }else if (containsOne(input)) {
      beepBoopArray.push(input + "beep");
    }else {
      break;
    }
  }; 
  return beepBoopArray.join(" ");
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