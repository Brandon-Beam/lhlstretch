const loopyLighthouse = (a1, a2, a3) => {
  for (let i = a1[0]; i <= a1[1]; i++) {
    if ((i % a2[1] === 0) && (i % a2[0] === 0)) {
      console.log(a3[0] + a3[1])
    }
    else if (i % a2[1] === 0) {
      console.log(a3[1])
    }
    else if (i % a2[0] === 0) {
      console.log(a3[0])
    }
    else (console.log(i))
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"])