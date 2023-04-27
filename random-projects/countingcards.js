let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      if (count > 0) {
        return count + " Bet";
      } else if (count <= 0) {
        return count + " Hold";
      }
      break;
    case 7:
    case 8:
    case 9:
      count = count + 0;
      if (count <= 0) {
        return count + " Hold";
      } else if (count > 0) {
        return count + " Bet";
      }
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      if (count <= 0) {
        return count + " Hold";
      } else if (count > 0) {
        return count + " Bet";
      }
      break;
  }

  // if (count <= 0){
  //   console.log(count + " Hold")
  // }
  // else if(count > 0){
  //   console.log(count + " Bet")
  // }
}

// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");
cc(2);
cc(2);
console.log(cc(10));
