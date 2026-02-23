const obj = {
    name: 'John',
    age: 30
};
console.log(obj);

obj.gender = "male";
console.log(obj);
delete obj.gender;

console.log([1, 2, 3].reduce((a, b) => a + b));//adds numbers in the array, together using the reduce 
console.log('gfg'.repeat(3));
//creates a new string by repeating the original string in 3 times
console.log('6' - 1);
//'6' is a string, so when you use the '-' operator with string and number, JavaScript convert the string to a number automatically which is called type coercion. '6' gets converted to the number 6, then 6 - 1 = 5. So, 5 is the answer.

