// Developer’s Quick Reference (JavaScript)


// REGULAR EXPRESSIONS
// Email address

	^[\\w\\-]+(\\.[\\w\\-]+)*@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$
	^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$ 
	^([\w\.*\-*]+@([\w]\.*\-*)+[a-zA-Z]{2,9}(\s*;\s*[\w\.*\-*]+@([\w]\.*\-*)+[a-zA-Z]{2,9})*)$	//List of semi-colon seperated email addresses
	^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$

// IP Address

	^((?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?))*$

// Credit Cards

	^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$

// Username of type test@test

	[^@/]+@[^@/]+

// Multiple spaces replacement

	\\s+

// Non-alphanumeric replacement

	[^a-zA-Z0-9]

// Blank line

	^$

// Positive integers

	^[1-9]+[0-9]*$

// Positive decimal values

	(^\d*\.?\d*[0-9]+\d*$)|(^[0-9]+\d*\.\d*$)

// Percentage (2 decimal places)

	^-?[0-9]{0,2}(\.[0-9]{1,2})?$|^-?(100)(\.[0]{1,2})?$

// State abbreviation
 
	[A-Z][A-Z]	//you may choose to put spaces either before or after the regex.

// Phone Numbers

	(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)

// City, State abbreviation 

	.*, [A-Z][A-Z]	

// Zip Code 

	[0-9]\{5\}(-[0-9]\{4\})?			//84094 or 84094-1234

// Social security number, such as: ###-##-####

	[0-9]\{3\}-[0-9]\{2\}-[0-9]\{4\}

// Dollar amounts, specified with a leading $ symbol

	\$[0-9]*.[0-9][0-9]

// DATE

	[0-9]\{4\}-[0-9]\{2\}-[0-9]\{2\}				//2003-08-06
	[A-Z][a-z][a-z] [0-9][0-9]*, [0-9]\{4\}			//Jan 3, 2003
    ^(\d{1,2})\/(\d{1,2})\/(\d{2}|(19|20)\d{2})$    //DD/MM/YY or DD/MM/YYYY or MM/DD/YY or MM/DD/YYYY

// HTML Tags except <p> </p>

	<(?>/?)(?!p).+?>

// Font Tags Replacement

	<(FONT|font)([ ]([a-zA-Z]+)=("|')[^"\']+("|'))*[^>]+>([^<]+)(</FONT>|</font>

// URL
	^http(s)?:\/\/((\d+\.\d+\.\d+\.\d+)|(([\w-]+\.)+([a-z,A-Z][\w-]*)))(:[1-9][0-9]*)?(\/([\w-.\/:%+@&=]+[\w- .\/?:%+@&=]*)?)?(#(.*))?$/i




// STRING OPERATIONS
// Convert to “Title Case”

 function titleCase(str){

   str = str.toLowerCase().split(' ');

   let final = [ ];

    for(let  word of str){
      final.push(word.charAt(0).toUpperCase()+ word.slice(1));
    }

  return final.join(' ')

}


// Remove non word character from a string
text.replace(/[^a-zA-Z0-9]+/gi, " ");


// Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");


// ARRAY OPERATIONS
// Loop Through Numbers

//  This function allows you to loop through a certain number of times
//  It is similar to the range function in python (if you are familiar with python)
function loopNumbers(number){
    for(let i of [].constructor(number)){
      // Do your thing
    }
  
    // Other function related things
  }
  
  //  You could Just extract the for loop like this
  //  Mind You Replace number with the number you intend
  
  for(let i of [].constructor(number)){
      // Do your thing
    }
  
  /***    EXAMPLE   ****/
  
  for(let i of [].constructor(7)){
      // Do your thing
    console.log('Called')
    }
  


    // Minimum Number In an array
    Math.min(...array)



    // Maximum Number in an array


    //  This function allows you to fetch the maximum number in a given array of numbers only

Math.max(...array)

/******--------EXAMPLE-----*******/
//  Create your array
const arrayOfNumbers = [1,2,3,4,5,6,7,8,9]
Math.max(...arrayOfNumbers) //  Expected Outcome  9




// Sum Numbers in an array
//  This function allows you to sum all the numbers in a given array of numbers only

function sumNum(array){
  //  Check if the argument supplied is an array and not an empty array
  return Array.isArray(array) && array.length > 0 ? array.reduce((a,b)=> (a + b)) : 'Argument supplied is not an array or an empty array'
}