function ispalindrome(str){
    let reversedString = str.split("").reverse().join("");
    if(str === reversedString){
        return true
    
    }
    else{
        return false;
    }
    
}
console.log(ispalindrome("cgc"));
            