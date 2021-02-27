const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here

  if (members === []) {
    return false;
  } else if (Array.isArray(members)) {
    dreamTeam = [];
    dreamTeamStr = "";
    for (let i = 0; i < members.length; i++) {
      if ((typeof members[i]) === "string") {
        letter = members[i].trim().toUpperCase()[0];
        dreamTeam.push(letter);
      }
    }
    dreamTeam.sort();
    dreamTeam.forEach((element) => {
      dreamTeamStr += element;
    });

    // console.log(dreamTeamStr);
    return dreamTeamStr;
  } else {
    return false;
  }
};
