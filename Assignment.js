// 1. let str = " HelloWorld ";
// console.log(str.trim().toUpperCase().slice(0, 5));
//output: "HELLO"
//explanation:
// The string is trimmed of leading and trailing spaces, converted to uppercase, and then sliced to get the first 5 characters.

// 2. let str = "JavaScript";
// console.log(str.slice(4, 1));
// output: "aS"
// explanation:
// The slice method extracts characters from index 4 to index 1, which results in "aS" (it does not throw an error even though the end index is less than the start index).


// 3. let a = "Learn@Code#123";
// console.log(a.replace(/[A-Za-z]/g, "*"));
// output: "****@***#123"


// 4. let x = " 12345 ";
// console.log(x.trim().padStart(10, "0"));
// output: "0000012345"

// 5. let str = "abcabcabc";
// console.log(str.replace("abc", "X"));
// output: "Xabcabc"



// 6. let result = "HelloWorld".charAt(100);
// console.log(result.length);
// output: 0 (since charAt(100) returns an empty string)
// output: 0

// 7. let data = "abc def".split("").reverse().join("");
// console.log(data);
// output: "fed cba"

// 8. console.log("Ram".concat("123").charAt(5));
// output: "3"


// 9. let str = "banana";
// console.log(str.indexOf("na", 3));
// output: 4 (the index of the second "na" starting from index 3)


// 10. console.log("Coding".padEnd(4, "*"));
// output: "Coding" (padEnd does not change the string if the length is already greater than 4)


// 11. console.log("APPLE".toLowerCase().includes("pp"));
// output: true (the string "apple" contains "pp")


// 12. console.log("12345".repeat(0));
// output: "" (repeating a string 0 times results in an empty string)


// 13. let str = " ";
// console.log(str.trim().length);
// output: 0 (the trimmed string is empty, so its length is 0)

// 14. let name = "RAM";
// console.log(name.charCodeAt(name.length));
// output: NaN (charCodeAt expects a valid index, and name.length is out of bounds)

// 15. let x = "A" + 1 + 2;
// console.log(typeof x);
// output: "string" (the result is "A12", which is a string)



// Section B: Logic-Building Tasks (10 Questions)
// 1. Write a function to capitalize the first letter of every word.
function capitalizeFirstLetter(sentence) {
    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log(capitalizeFirstLetter("hello world")); // "Hello World"

// 2. Write a function that reverses the words in a sentence (not characters).
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("hello world")); // "world hello"

// 3. Write a function that checks if a given string is palindrome (without using a loop).
function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalizedStr === normalizedStr.split('').reverse().join('');
}
    console.log(isPalindrome(str));


// 4. Write a function to convert "10/06/2025" to "2025-06-10" using string methods only.
function convertDateFormat(dateStr) {
    const parts = dateStr.split('/');
    return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
}
console.log(convertDateFormat("10/06/2025")); // "2025-06-10"


// 5. Write a function to create a masked phone number (e.g., ******3210).
function maskPhoneNumber(phoneNumber) {
    const lastFourDigits = phoneNumber.slice(-4);
    return '*'.repeat(phoneNumber.length - 4) + lastFourDigits;
}
console.log(maskPhoneNumber("1234567890")); // "******7890"

// 6. Write a function to check if a given email is valid (must contain one @ and one . after @).'
function isValidEmail(email) {
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.', atIndex);
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
}
console.log(isValidEmail("tanay@gandu.com")); // true
// 7. Write a function to count the number of vowels in a given string (no loop, use match + regex).
function countVowels(str) {
    const matches = str.match(/[aeiouAEIOU]/g);
    return matches ? matches.length : 0;
}
console.log(countVowels("Hello World")); // 3
// 8. Write a function to return the middle character(s) of a string. If even, return 2 chars; if odd, return
// 1 char.

function getMiddleCharacter(str) {
    const length = str.length;
    if (length % 2 === 0) {
        return str.slice(length / 2 - 1, length / 2 + 1);
    } else {
        return str.charAt(Math.floor(length / 2));
    }
}
console.log(getMiddleCharacter("hello")); // "l"

// 9. Write a function to remove all non-alphanumeric characters from a string.
function removeNonAlphanumeric(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '');
}
console.log(removeNonAlphanumeric("Hello, World! 123")); // "HelloWorld123"

// 10. Write a function to find the longest word in a sentence using only string methods and split.
function findLongestWord(sentence) {
    return sentence.split(' ')
        .reduce((longest, current) => current.length > longest.length ? current : longest, '');
}
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"


// Section C: Trick-Based Deep Output (5 Questions)
// 1. console.log("0".padStart(5, 12345));
// output: "00000" (padStart pads the string "0" with "0" until it reaches a length of 5, ignoring the second argument)

// 2. let str = "abc";
// console.log(str.concat().concat().concat());
// output: "abcabcabc" (concat without arguments returns the original string, so it concatenates "abc" three times)


// 3. console.log(" hello ".trim().padEnd(10).length);
// output: 10 (trim removes spaces, padEnd adds spaces to make the length 10)


// 4. let str = "Banana";
// console.log(str.replaceAll("a", "").length);
// output: 5 (removes all 'a's, leaving "Bnn", which has length 5)


// 5. let s = "level";
// console.log(s === s.split("").reverse().join(""));
// output: true (the string "level" is a palindrome, so it equals its reverse)




