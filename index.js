function myEach(col, callback) {
  for(let val in col) {
    callback(col[val])
  }
  return col
}

function myMap(col, callback) {
  let newArr = []
  for(let val in col) {
    newArr.push(callback(col[val]))
  }
  return newArr
}

function myReduce(col, callback, acc = -2) {
  for(let val in col) {
    acc = callback(acc, col[val], col)
  }
  return acc
}

function myFind(col, pred) {
  for(let val in col) {
    if(pred(col[val])) {
      return col[val]
    }
  }
}

function myFilter(col, pred) {
  let newArr = []
  for(let val in col) {
    if(pred(col[val])) {
      newArr.push(col[val])
    }
  }
  return newArr
}

function mySize(col) {
  let count = 0
  for(let val in col) {
    if(col[val]) {
      count += 1
    }
  }
  return count
}












































// function myEach(col, alert) {
//   for(let value in col) {
//     alert(col[value])
//   }
//   return col
// }

// function myMap(col, callback) {
//   let newArr = []
//   for(let value in col) {
//     newArr.push(callback(col[value]))
//   }
//   return newArr
// }

// function myReduce(col, callback, acc = -2) {
//   for(let value in col) {
//     acc = callback(acc, col[value], col)
//   }
//   return acc
// }

// function myFind(col, callback) {
//   for(let value in col) {
//     if(callback(col[value]))
//       return col[value]
//   }
// }

// function myFilter(col, callback) {
//   let newCol = []
//   for(let value in col) {
//     if(callback(col[value]) === true)
//     newCol.push(col[value])
//   }
//   return newCol
// }

// function mySize(col) {
//   return Object.keys(col).length
// }

// function myFirst(col, int = 1) {
//   if(int >= 2) {
//     return col.slice(0, int)
//   } else {
//     return parseInt(col.slice(0, int))
//   }
// }

// function myLast(col, int = -1) {
//   if(int >= 2) {
//     return col.slice(-(int))
//   } else {
//     return parseInt(col.slice(int))
//   }
// }

// function myKeys(obj) {
//   return Object.keys(obj)
// }

// function myValues(obj) {
//   return Object.values(obj)
// }