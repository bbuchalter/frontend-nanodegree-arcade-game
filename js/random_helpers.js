RandomHelpers = {
  getRandomArbitrary: function (min, max) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.random() * (max - min) + min;
  },

  getRandomInt: function (min, max) {
    // Returns a random integer between min (included) and max (included)
    // Using Math.round() will give you a non-uniform distribution!
    // Taken from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
