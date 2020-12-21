function jsonFormatter(data) {
  var header = Object.keys(data[0]) // untuk mendapatkan key dari array object yang di input

  var result = { h: header, d: [] } // inisialaisasi key h berisi object header dan d di beri default array kosong yang nantinya akan di isi oleh looping

  for (let a = 0; a < data.length; a++) {
    result.d.push([data[a].username, data[a].hair_color, data[a].height])
    //memasukkan data ke dalam array dengangan array yng berisi username, hair color dan berat
  }

  return result //  mengembalikan variable result sebagai nilai balik dari fungsi
}

var input = [
  { username: "ali", hair_color: "brown", height: 1.2 },
  { username: "mar c", hair_color: "blue", height: 1.4 },
  { username: "joe", hair_color: "brown", height: 1.7 },
  { username: "zehua", hair_color: "black", height: 1.8 },
]

console.log(jsonFormatter(input))
