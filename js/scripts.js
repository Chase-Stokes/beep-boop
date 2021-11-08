/*function containsOne(input) {
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
      return true ; 
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
};*/


function beepBoop(input) {
  let beepBoopArray = [];
  for (let i =0; i <= input; i++) {
    let inputNum = i.toString();
    if (inputNum.includes("3")) {
      beepBoopArray.push("Won't you be my neighbor?");
    }else if (inputNum.includes("2")) {
      beepBoopArray.push("boop");
    }else if (inputNum.includes("1")) {
      beepBoopArray.push("beep");
    }else {
      beepBoopArray.push("" + inputNum);
    }
  }; 
  return beepBoopArray;
}
  
$(document).ready(function(){
  $("form#inputNumber").submit(function(event){
    event.preventDefault();
    let numberInput = $("input#inputtedNumber").val();
    let output = beepBoop(numberInput);
    $(".outputArray").html(output);
  });
});

