/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */

let i = 81,
  sum = 0;
while (i <= 131) {
  if (i % 2 !== 0) {
    sum = sum + i;
    console.log(i);
  }
  i++;
}
console.log("total sum of the odd numbers :- ", sum);

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.



 */

let k = 206,
  total = 0;
while (k <= 331) {
  total = total + k;
  console.log(k);
  k += 2;
}
console.log("total sum of the even numbers :- ", total);
