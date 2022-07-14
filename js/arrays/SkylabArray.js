class SkylabArray {
  constructor(...inputs) {
    let i = 0;
    for (const j of inputs) {
      this[i] = j;
      i += 1;
    }
  }
}

module.exports = SkylabArray;
