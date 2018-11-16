var level1 = [
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0],
  [1, 1, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 1, 1],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
];

var level2 = [
  [5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 5, 5],
  [3, 3, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 0, 0, 3, 3, 0, 0, 1, 1],
  [3, 3, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5, 0, 0, 3, 3, 0, 0, 1, 1],
  [3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 1, 1, 5, 5, 3, 3, 5, 5, 5, 5],
  [3, 3, 3, 3, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 1, 1, 5, 5, 3, 3, 5, 5, 5, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 3, 3, 0, 0, 5, 5],
  [5, 5, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 1, 1, 5, 5, 5, 5, 3, 3, 0, 0, 5, 5],
  [5, 5, 5, 5, 5, 5, 1, 1, 3, 3, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 5, 5, 5, 5, 1, 1, 3, 3, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [1, 1, 0, 0, 5, 5, 1, 1, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5],
  [1, 1, 0, 0, 5, 5, 1, 1, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 1, 1, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5],
  [5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5]
];

var level3 = [
  [5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 1, 1, 1, 1, 1, 1, 5, 5, 5, 5],
  [1, 1, 5, 5, 0, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5, 5],
  [1, 1, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [1, 1, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5, 2, 2, 2, 2, 5, 5, 2, 2],
  [0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 5, 5, 2, 2, 2, 2, 5, 5, 2, 2],
  [0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 2, 2, 5, 5, 2, 2, 2, 2, 2, 2, 5, 5, 0, 0, 0, 0],
  [5, 5, 5, 5, 0, 0, 5, 5, 2, 2, 2, 2, 5, 5, 2, 2, 2, 2, 2, 2, 5, 5, 0, 0, 0, 0],
  [0, 0, 0, 0, 5, 5, 5, 5, 2, 2, 0, 0, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 0, 0, 0, 5, 5, 5, 5, 2, 2, 0, 0, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 1, 5, 5, 5],
  [2, 2, 2, 2, 2, 2, 5, 5, 2, 2, 5, 5, 1, 1, 5, 5, 0, 0, 5, 5, 5, 1, 5, 5, 5, 5],
  [2, 2, 2, 2, 2, 2, 5, 5, 2, 2, 5, 5, 1, 1, 5, 5, 0, 0, 5, 5, 5, 1, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0],
  [5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 0, 0, 0, 0],
  [5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5],
  [0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5],
  [0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5],
  [0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
];

var level4 = [
  [5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  [0, 5, 0, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 5, 5],
  [0, 5, 0, 5, 0, 5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 5, 0, 5, 0, 5, 5, 5, 5, 5, 5, 5],
  [0, 5, 0, 5, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 5, 0, 0, 0, 5, 5, 5, 5, 5],
  [0, 5, 0, 5, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 5, 0, 0, 0, 5, 5, 5, 5, 5],
  [5, 0, 5, 0, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 0, 5, 0, 5, 5, 0, 0, 0, 5, 5, 5, 5, 5, 5, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 0, 5, 5, 5, 0, 0, 5, 0, 0, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 0, 5, 5, 5, 0, 0, 5, 0, 0, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 0, 0, 5, 0, 5, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 0, 5, 5, 0, 5, 5, 5, 5, 0, 0, 0, 5, 0, 0, 5, 0, 5, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 5, 5, 5],
  [5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 5, 5, 5],
  [5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 5, 5, 5],
  [5, 5, 5, 0, 5, 5, 5, 5, 0, 5, 0, 0, 0, 0, 0, 5, 5, 5, 0, 5, 0, 0, 5, 5, 5, 5],
  [5, 5, 5, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 0, 5, 0, 0, 0, 0],
  [5, 5, 5, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 5, 5, 0, 5, 0, 5, 5, 5, 0, 0],
  [5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 5, 0, 0, 5, 0, 0, 5, 0, 5, 0, 5, 5, 0, 5, 0],
  [5, 5, 5, 0, 5, 5, 5, 5, 5, 0, 0, 5, 0, 0, 5, 0, 0, 5, 0, 5, 0, 5, 5, 0, 5, 0],
  [5, 5, 5, 5, 0, 5, 5, 5, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 5, 5, 5, 0, 0, 5, 0, 0, 5, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 5, 5],
  [5, 5, 5, 5, 0, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 5, 5, 5, 0, 5, 5, 5],
  [5, 5, 5, 5, 0, 5, 5, 0, 0, 5, 5, 0, 0, 0, 0, 5, 0, 0, 0, 5, 5, 5, 0, 5, 5, 5],
  [5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5],
  [5, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 0, 5, 5, 0, 5, 5, 5, 0, 0, 0, 0, 5, 5, 5, 5]
];
