const password = (str) => {
  let newWord = ''
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
      newWord = newWord + '4'
    }
    else if (str[i] === 'e') {
      newWord = newWord + '3'
    }
    else if (str[i] === 'o') {
      newWord = newWord + '0'
    }
    else if (str[i] === 'l') {
      newWord = newWord + '1'
    }
    else {
      newWord = newWord + str[i]
    }
  } console.log(newWord)
}

password('aeol')