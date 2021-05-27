const getFibonacci = (num) => {
  let a = (num * (1 + Math.sqrt(5))) / 2.0;
  return Math.round(a);
};

module.exports = getFibonacci;
