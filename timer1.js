const args = Number(process.argv.slice(2));

const timer = (input) => {
  let time = 0;
  if (input === 0) {
    return "";
  } else if (Math.sign(input) === -1) {
    return "";
  } else if (isNaN(input)) {
    return "";
  } else {
    time = input * 1000;
    setTimeout(() => {
      process.stdout.write('...');
    }, time)
  }
}

timer(args);
