/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let i = 81,
  sum = 0;
for (i; i <= 131; i++) {
  if (i % 2 == 0) {
    continue;
  }
  sum = sum + i;
  console.log(i);
}
console.log("total sum of the odd numbers :- ", sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.



 */

let k = 206,
  total = 0;
for (k; k <= 331; k++) {
  if (k % 2 !== 0) {
    continue;
  }
  total = total + k;
  console.log(k);
}
console.log("total sum of the even numbers :- ", total);
