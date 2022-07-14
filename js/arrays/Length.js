const skylabArray = require("./SkylabArray");

function skylabArrayLength(length) {
  for (const i of skylabArray) {
    length += 1;
  }
  return length;
}
skylabArrayLength();
console.log(length);
