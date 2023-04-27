function calculateTotal(subTotal, tax) {
  const total = subTotal + tax;
  return total;
}

let order1, order2, order3;
order1 = calculateTotal(100, 2);
order2 = calculateTotal(200, 50);
order3 = calculateTotal(50, 1);

const order = [order1, order2, order3];

console.log(order);

const calculateResult = function calculateTotal(subTotal, tax) {
  const total = subTotal + tax;
  return total;
};
