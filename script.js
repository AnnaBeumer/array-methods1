// A
const addTheWordCool = function (array) {
  array.push("cool");
  return array;
};
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));

// B
const amountElementsArray = function (fruit) {
  return fruit.length;
};

console.log(amountElementsArray(["appels", "peren", "citrounen"]));

// C
const selectBelgium = function (benelux) {
  return benelux[0];
};

console.log(selectBelgium(["Belgie", "Nederland", "Luxemburg"]));

// D
const lastElementArray = function (last) {
  return last[last.length - 1];
};

console.log(lastElementArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachTrumpSlice = function (array) {
  return array.slice(1);
};

const impeachTrumpSplice = function (array) {
  return array.splice(1);
};

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

// F
const stringsTogether = function (array) {
  return array.join(" ");
};

console.log(stringsTogether(["Winc", "Academy", "is", "leuk", ";-}"]));

// G
const combineArrays = function (array1, array2) {
  return array1.concat(array2);
};

console.log(combineArrays([1, 2, 3], [4, 5, 6]));
