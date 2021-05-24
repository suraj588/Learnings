const str = "I am learning \"JavaScript\"";     // In order to use " or ' or \ as a character in the string, first add \ then write the content.
console.log(str);                              // Output = I am learning "JavaScript".


// When an operator is applied to wrong type of value, then javaScript tries to convert the type of the values as it needs with a certain rules and the rules are mostly unexpected. This is called type coercion. '==' signifies shallow checking. That means the values will not be checked if their types are same or not. Hence type conversions are common in JavaScript. '===' or '!==' signifies strict checking. The operator checks if the type of the values are same or not and checks for the values equality as well.

// Decimal numbers when converted to binary gives some interesting facts :-
// 1.) 13 in binary = 1101 => This represents that the number 13 occupies 4 bits of space (the number of binary digits).
// 2.) In order to get maximum number taking a certain bits of memory, for example if you want to calculate what is the maximum value of a number which can occupy 4 bits of memory then we can calculate it using a simple formula = 2^4 - 1 = 15  So, 15 is the maximum number which can be occupied in a memory storage of 4 bits. In general the formula is = 2^n - 1, where 'n' is the no. of bits to be occupied.
// 3.) So, if you have only 4 bits in memory, then you can store numbers from 0 to 15 in it.

//  In javaScript, numbers can maximum occupy 64 bits, that is numbers upto 2^64 - 1. But since for decimal numbers having some values after decimal point and for negative numbers which occupies 1 bit of memory so the maximum memory for a decimal number reduces to 54 bits or 9 quadrillion (15 zeros after 9). But for positive numbers without any decimal points, it can store upto 2^64 - 1 = 18 quintillion (18 zeros after 18).


console.log(8*null);                        //  null converted to number 0 when used any operator. Output = 0
console.log('5' / 1);                       //  string '5' converted to number when used -,* or / operator and the output is a number. Output = 4
console.log('5' + 1);                       //  The number 1 is converted into string '1' and returns an appended string. Output = 51
console.log('five' - 5);                    //  if the string cannot be converted to number and there are different typeOf values, NaN is returned.
console.log(false == 0);                //  0 is considered a falsy value and == operator does a shallow check and not strict check. Output = true.
console.log(null == undefined)          //  Both are falsy values.
console.log(null == null)               //  Both are falsy.
console.log(undefined == undefined)     //  Both are falsy.
console.log(NaN == NaN);                //  Expected answer false as both are falsy but gives unexpected output. Output = false.
console.log(null === null);             //  Strict checking gives true only if both the values are same along with their types. Output = true.
console.log(null === undefined);        //  Output = false.
console.log(NaN === NaN);               //  Expected output is true. Output = false.
console.log(null || 'Athens');          //  '||' operator 'returns' the first truthy value it founds in the expression. If it does not find any   truthy value it returns the last falsy value. Output = Athens. 'returns' means it does not go for further checks.
console.log('Athens' || null);          //  Output = Athens.
console.log('India' || 'Athens')        //  Output = India. 
console.log(false || null)              //  Output = null.
console.log("" && true);                //  '&&' operator returns first falsy value in the expression. If it does not find any falsy value it returns the last truthy value in the expression. Empty string represents falsy value. Output = "".
console.log('Athens' && 'India');       //  Output = India.
console.log(false && null);             //  Output = false.
console.log(false && 'Athens');         // Output = false.


//  In the case of true || x, whatever be the value of x, it never reaches for the check and does not evaluates x as the first value is true and the true is returned right there. Similar is the case for false && x. false is returned at the first go and x is never evaluated. This can be used to perform some dynamic operations. Say if you need to display something to the user and due to some reason, the fetching of data fails from the server. SO you can use :- data && <some code to display data>. So if the data does not exist, it is returned right away and the second value is never evaluated. This is called short-circuit evaluation.

//   Source of information :- Eloquent JavaScript by Marjin Haverbeke.