const reverse = () => {
  const array = process.argv.slice(2)
  for (const item of array) {
    let x = ''
    for (const letter of item) {
      x = letter + x
    }
    console.log(x)
  }
};

reverse()