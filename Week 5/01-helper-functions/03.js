// filter function

// given an input array return all the even values

const input = [1, 2, 3, 4, 5, 6];

const transform = (i) => {
  return i % 2 === 0;
};

const ans = input.filter(transform);
console.log(ans);
