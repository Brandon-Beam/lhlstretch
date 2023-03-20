const pig = () => {
  const array = process.argv.slice(2)
  let word = ''
  for (const item of array) {
    let x = item.slice(1) + item[0] + 'ay '
    word = word + x
  }
  console.log(word)
};

pig()