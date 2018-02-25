//```````````````````````````````````````````````````````````````````JAVASCRIPT``````````````````````````````````````````````````````````````````````````````````````


/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

    Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

    Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
    var dividends = [];
    var sum = 0;
    for (var i = 0; i < number; i++){
      if (i%3 === 0 && i%5 === 0){
        dividends.push(i);
      }else if( i%3 === 0){
        dividends.push(i);
      }else if(i%5 === 0){
        dividends.push(i);
      }
    }
    for (var j = 0; j < dividends.length; j++){
       sum += dividends[j];
    }
    return sum;
   }
//Write a function that takes a string which has integers inside it separated by spaces, and your task is to convert each integer in the string into an integer and //return their sum.

function summy(stringOfInts){
    return stringOfInts.split(" ").reduce(function(a, b) {
    return parseInt(a) + parseInt(b);
    }, 0);
    

}
/* Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
Notes:

Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.

*/ 

function inArray(array1,array2){
    let newArray = [];
    array1.map((str) => {
      for (let i = 0; i < array2.length; i++){
        let occurences = 0;
        array2[i].indexOf(str) !== -1 ? occurences++ : false;
        occurences > 0 && newArray.indexOf(str) == -1 ? newArray.push(str) : false;
      }
    })
    return newArray.sort();
  }

//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

function greet(name){
    return "Hello, " + name + " how are you doing today?";
  }


/* When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.
  
Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.
  
  Notes:
  
      The movement of the petal is quite compilcated, so in this case we can see the velocity as a constant during its falling.
      Pay attention to the data types.
      If the initial velocity is non-positive, the return value should be 0
 */ 
  
function sakuraFall(v) {
    if (v > 0){
      return 400/v;
    }
    else{
      return 0;
    }
  }

//Given and array of integers (x), return the array with each value doubled.

function maps(x){
    let result = x.map(num => num * 2);
    return result;
}



/*  Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. For example:

  stringClean('! !') == '! !'
  stringClean('123456789') == ''
  stringClean('This looks5 grea8t!') == 'This looks great!'
  
  Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
*/

function stringClean(s){
    return s.replace(/[0-9]/g, '');
  }

/*  It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    return str.slice(1, str.length -1);
  }

// Complete the solution so that it reverses the string value passed into it. 

function solution(str){
    return str.split('').reverse().join('');
  }

/*You are given two angles (in degrees) of a triangle.

  Write a function to return the 3rd.
  
  Note: only positive integers will be tested.
*/

function otherAngle(a, b) {
    return 180-(a+b);
  }

/*  Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

  Examples input/output:
  
  XO("ooxx") => true
  XO("xooxx") => false
  XO("ooxXm") => true
  XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
  XO("zzoo") => false
*/

function XO(str) {
    let countX = 0;
    let countO = 0;
    let nuller = 0;
    str = str.split('');
    for (var i = 0; i < str.length; i++){
     str[i] == 'o' || str[i] == 'O' ? countO++ : nuller++ ;
     str[i] == 'x' || str[i] == 'X' ? countX++ : nuller++ ;
    }
  return countO == countX ? true : false;
}

/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List>
Example Input

[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]

Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example Output

["Open", "Open", "Senior", "Open", "Open", "Senior"]

*/

function openOrSenior(data){
    let newArray = data.map((val)=>{
      if (val[0] > 54 && val[1] > 7){
      return 'Senior'
    }else{
    return 'Open';
    }
  })
  return newArray;
  }
