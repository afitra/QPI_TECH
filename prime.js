function getPrimes(num) {
  var result = []

  for (let a = 1; a <= num; a++) {
    var temp = []

    for (let b = 0; b <= num; b++) {
      if (a % b == 0) {
        temp.push(b)
      }
    }

    if (temp.length == 2) {
      result.push(a)
    }
  }
  return result
}

console.log(getPrimes(10))
