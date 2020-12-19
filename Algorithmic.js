// For example, n=4, we have:
// 4
// 3,1
// 2,2
// 2,1,1
// 1,1,1,1
// Note that 2,1,1 is same as 1,2,1 or 1,1,2.

function viewTree(arr, inputNumber) {
  for (let a = arr.length - 1; a >= 0; a--) {
    var temp = ""

    for (let b = 0; b < arr[a].length; b++) {
      if (b < arr[a].length - 1) {
        temp += `${arr[a][b]},`
      } else {
        temp += `${arr[a][b]}`
      }
    }
    console.log(temp)
  }

  return ""
}

let getTreeFactory = function (flag, inputNumber, total, start, result, data) {
  if (flag) {
    getTreeFactory(false, inputNumber, 0, 1, result, data)

    return viewTree(data, inputNumber)
  } else {
    if (total == inputNumber) {
      data.push(result.slice())
    }

    for (let i = start; i <= inputNumber; i++) {
      let temp = total + i
      if (temp <= inputNumber) {
        result.push(i)
        getTreeFactory(false, inputNumber, temp, i, result, data)
        result.pop()
      } else {
        return
      }
    }
  }
}
let input = 8
console.log(getTreeFactory(true, input, input, input, [], []))
