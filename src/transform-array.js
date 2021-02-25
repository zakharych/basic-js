// const CustomError = require("../extensions/custom-error");

// module.exports = function transform(arr) {
//   console.log(arr);
//   newArr = [];
//   prases = [
//     "--double-next",
//     "--double-prev",
//     "--discard-prev",
//     "--discard-next",
//   ];
//   pass = 0;
//   arr.map((e, i, array) => {
//     if (prases.includes(e)) {
//       if (e === "--double-next") {
//         if (prases.includes(array[i + 1])) {
//         } else {
//           newArr.push(e);
//           newArr.push(array[i + 1]);
//         }
//       } else if (e === "--double-prev") {
//         if (prases.includes(array[i - 1])) {
//         } else {
//           newArr.push(e);
//           newArr.push(array[i - 1]);
//         }
//       } else if (e === "--discard-prev") {
//         if (prases.includes(array[i - 1])) {
//         } else {
//           newArr.pop(newArr.length);
//           newArr.push(e);
//         }
//       } else if (e === "--discard-next") {
//         newArr.push(e);
//         if (prases.includes(array[i + 1])) {
//         } else {
//           pass = 1;
//         }
//       } else if (!prases.includes(e)) {
//         if (pass === 0) {
//           newArr.push(e);
//         } else {
//           pass = 0;
//         }
//       }
//     } else {
//       newArr = arr;
//     }
//   });
//   if (newArr.length === 0) {
//     newArr = arr;
//   }
//   return newArr.filter((e) => !prases.includes(e));
// };

function transform(arr) {
  console.log(arr);
  newArr = [];
  prases = [
    "--double-next",
    "--double-prev",
    "--discard-prev",
    "--discard-next",
  ];
  pass = 0;
  arr.map((e, i, array) => {
    if (prases.includes(e)) {
      if (e === "--double-next") {
        if (prases.includes(array[i + 1])) {
        } else {
          newArr.push(e);
          newArr.push(array[i + 1]);
        }
      } else if (e === "--double-prev") {
        if (prases.includes(array[i - 1])) {
        } else {
          newArr.push(e);
          newArr.push(array[i - 1]);
        }
      } else if (e === "--discard-prev") {
        if (prases.includes(array[i - 1])) {
        } else {
          newArr.pop(newArr.length);
          newArr.push(e);
        }
      } else if (e === "--discard-next") {
        newArr.push(e);
        if (prases.includes(array[i + 1])) {
        } else {
          pass = 1;
        }
      } else if (!prases.includes(e)) {
        if (pass === 0) {
          newArr.push(e);
        } else {
          pass = 0;
        }
      }
    } else {
      newArr = arr;
    }
  });
  if (newArr.length === 0) {
    newArr = arr;
  }
  return newArr.filter((e) => !prases.includes(e));
}

console.log(transform([ '--discard-prev', Infinity, '--discard-prev' ]));
//[1, 2, 3, 1337, 4, 5]
console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);
//[1, 2, 3, 1337, 4, 5]
console.log(
  transform([1, 2, 3, "--double-next", 1337, "--discard-prev", 4, 5])
);
//[1, 2, 3, 1337, 4, 5]
console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--discard-prev", 4, 5])
);
//[1, 2, 3, 4, 5]
console.log(transform([1, 2, 3, "--double-next", 1337, "--double-prev", 4, 5]));
//[1, 2, 3, 1337, 1337, 1337, 4, 5]
