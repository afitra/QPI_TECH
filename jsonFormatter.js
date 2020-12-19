function jsonFormatter(data) {
  var header = Object.keys(data[0])

  var result = { h: header, d: [] }

  for (let a = 0; a < data.length; a++) {
    result.d.push([data[a].username, data[a].hair_color, data[a].height])
  }
  return result
}

var input = [
  { username: "ali", hair_color: "brown", height: 1.2 },
  { username: "mar c", hair_color: "blue", height: 1.4 },
  { username: "joe", hair_color: "brown", height: 1.7 },
  { username: "zehua", hair_color: "black", height: 1.8 },
]

console.log(jsonFormatter(input))
