const args = process.argv;

console.log("This will make it beep at:");
args.slice(2).forEach((num) => {
  let numCheck = Number(num);
  if(!isNaN(numCheck) && numCheck >= 0) {
    setTimeout(() => {
      console.log(`${numCheck} seconds`);
      process.stdout.write('\x07');
    }, num * 1000);
  }
});

