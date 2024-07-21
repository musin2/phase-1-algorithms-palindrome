function isPalindrome(word) {
    for (let i = 0; i < word.length / 2; i++) {
      const j = word.length - 1 - i;
      if (word[i] !== word[j]) return false;
    }
    return true;
  }

/*
  iterates through the letter of the word from the beginning to middle
  check the corresponding letter from the end to the middle
  if any of the letters are not the same it returns false
  if all the letters match, the function returns ttrue
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
