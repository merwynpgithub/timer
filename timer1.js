const args = process.argv;

function checkIfPosititiveNum(numConvert) {
  return !isNaN(numConvert) && numConvert >= 0;
}

console.log("This will make it beep at:");
const timeArray = args.slice(2); //use variables
timeArray.forEach((num) => {
  let numConvert = Number(num);
  const printNum = () => {
    console.log(`${numConvert} seconds`);
    process.stdout.write('\x07');
  };
  if(checkIfPosititiveNum(numConvert)) { //refactor
    setTimeout(printNum, num * 1000);
  }
});