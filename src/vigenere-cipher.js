const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    let decryptString = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      let currentLetter = message[i];
      let currentLetterCode = currentLetter.charCodeAt();

      if (
        (currentLetterCode >= 97 && currentLetterCode <= 122) ||
        (currentLetterCode >= 65 && currentLetterCode <= 90)
      ) {
        let encryptSimbol =
          (currentLetter.toUpperCase().charCodeAt() -
            65 +
            (key[j % key.length].toUpperCase().charCodeAt() - 65)) %
          26;
        decryptString += String.fromCharCode(encryptSimbol + 65);
        j++;
      } else {
        decryptString += currentLetter;
      }
    }
    if (this.mode === false ) {
      return decryptString.split("").reverse().join("");
      
    }
    return decryptString;
  }
  decrypt(encryptedMessage, key) {
    let decryptedString = "";
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      let currentLetter = encryptedMessage[i];
      let currentLetterCode = currentLetter.charCodeAt();

      if (
        (currentLetterCode >= 97 && currentLetterCode <= 122) ||
        (currentLetterCode >= 65 && currentLetterCode <= 90)
      ) {
        let decryptSimbol =
          (currentLetter.toUpperCase().charCodeAt() -
            65 +
            26 -
            (key[j % key.length].toUpperCase().charCodeAt() - 65)) %
          26;
          decryptedString += String.fromCharCode(decryptSimbol + 65);
        j++;
      } else {
        decryptedString += currentLetter;
      }
    }
    
    if (this.mode === false ) {
      return decryptedString.split("").reverse().join("");
      
    }
    return decryptedString;
  }
}

module.exports = VigenereCipheringMachine;
