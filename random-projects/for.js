function multiplyAll(arr) {
  let product = 1;

  let counter = 0;
  for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr[a].length; b++) {
      counter = arr[a][b];
      product *= counter;
    }
  }

  return product;
}

console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);
