function myEach(col, alert) {
  for(let value in col) {
    alert(col[value])
  }
  return col
}

function myMap(col, callback) {
  let newArr = []
  for(let value in col) {
    newArr.push(callback(col[value]))
  }
  return newArr
}

function myReduce(col, callback, acc = -2) {
  for(let value in col) {
    acc = callback(acc, col[value], col)
  }
  return acc
}

function myFind(col, callback) {
  for(let value in col) {
    if(callback(col[value]))
      return col[value]
  }
}

function myFilter(col, callback) {
  let newCol = []
  for(let value in col) {
    if(callback(col[value]) === true)
    newCol.push(col[value])
  }
  return newCol
}

function mySize(col) {
  return Object.keys(col).length
}

function myFirst(col, int = 1) {
  if(int >= 2) {
    return col.slice(0, int)
  } else {
    return parseInt(col.slice(0, int))
  }
}

function myLast(col, int = -1) {
  if(int >= 2) {
    return col.slice(-(int))
  } else {
    return parseInt(col.slice(int))
  }
}

function myKeys(obj) {
  return Object.keys(obj)
}

function myValues(obj) {
  return Object.values(obj)
}