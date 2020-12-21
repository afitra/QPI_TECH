function getPrimes(num) {
  var result = []

  for (let a = 1; a <= num; a++) {
    var temp = [] // untuk menampung faktor bembagi bilangan

    for (let b = 0; b <= num; b++) {
      if (a % b == 0) {
        // mencari faktor pembagi denganmenggunakan modulus misal 4%2 ==0 maka nilai 2 akan di masukkan ke var temp karena merupakan faktor pe,bagi bilangan a
        temp.push(b)
      }
    }

    if (temp.length == 2) {
      // jika variable temp berisi 2 bilangan berarti nilai a adalah bilangan prima
      result.push(a)
    }
  }
  return result
}

console.log(getPrimes(10))
