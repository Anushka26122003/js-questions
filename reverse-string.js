function reverseString(str) 
{
  return str.split("").reverse().join("");
}
//split("") → converts string to array → ["h","e","l","l","o"]

//reverse() → reverses array → ["o","l","l","e","h"]

//join("") → converts back to string → "olleh"
console.log(reverseString("ANUSHKA "));
