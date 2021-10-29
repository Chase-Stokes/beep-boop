# _Beep Boop_

#### By _**Chase Stokes**_

#### _Takes in a sentence and returns it in pig latin_

## Technologies Used

* _HTML_
* _JavaScript_
* _CSS_
* _Markdown_
* _Bootstrap_
* _JQuery_

## Description

_A web application that takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:_
*_Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
*_Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
*_Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"*

## Setup/Installation Requirements


* _You can find the github repository [here](https://github.com/Chase-Stokes/beep-boop.git)_
* _Clone the repository to your computer_
* _Open the index.html file in a browser_


## Known Bugs

* _No known bugs at this time_

## Licence - [MIT](https://opensource.org/licenses/MIT)

_If you run into any problems or find a bug, would like to reach me for a seperate reason, feel free to send me an email @chasehstokes@gmail.com with details of your issue._

Copyright (c) _2021_  _Chase Stokes_

### Tests

## Describe: containsOneToThree()

Test: It should return true if the input contains 1, 2, or 3
Code: containsOneToThree(1)
Expected Output: True ~completed

Test: It should return false if the input doesnt contains 1, 2, or 3
Code: containsOneToThree(4)
Expected Output: False ~completed


## Describe: beepBoop()

Test: It should return an array with a 0 if the number 0 is inputted
Code: beepBoop(0);
Expected Output: 0 ~completed

Test: It should ruturn an array with beep if the number 1 is inputted
Code: beepBoop(1)
Expected Output: "beep"

Test: It should ruturn an array with boop if the number 2 is inputted
Code: beepBoop(1)
Expected Output: "boop"

Test: It should ruturn an array with "wont you be my neighbor" if the number 1 is inputted
Code: beepBoop(1)
Expected Output: "wont you be my neighbor"
