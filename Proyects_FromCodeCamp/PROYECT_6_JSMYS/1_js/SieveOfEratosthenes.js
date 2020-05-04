let A = [];
let B = [];

for (let i = 2; i < 20; i++) { A.push(i); }

console.log(A);

// B.push(A.shift());A = A.filter(i => i%B[B.length - 1] !== 0);

let sum = 0;

do {
    B.push(A.shift());
    A = A.filter(i => i % B[B.length - 1] !== 0);
    sum++;
} while(sum != 7);
console.log(A);
console.log(B);