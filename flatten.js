let assertArraysEqual = function (one, two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
      console.log('sadness')
      return
    }
  } console.log('yay')
}

let eqArray = function (one, two) {
  for (let num of one) {
    if (one[num] !== two[num]) {
      return false
    }
  } return true
};

const flatten = (array) => {
  let newArray = []
  for (const item of array) {
    if (Array.isArray(item) === true) {
      for (i of item) {
        newArray.push(i)
      }
    } else {
      newArray.push(item)
    }
  }
  console.log(newArray)
}


flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]