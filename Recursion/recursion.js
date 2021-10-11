// ******************************** Recursion Programs **********************************

// 1. Factorial // Done By ME

let re = '';
const fact = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    }

    // re += num * (num - 1);
    // fact(num - 1);
    // return re;
    const re = num * fact(num - 1);
    // num = num - 1;
    return re;
}

//********************************************************************

//Concept Of Recursion

// console.log(fact(6));
// re=720
// 6*fact(num - 1)=6*120
//     5*fact(num - 1)=5*24
//         4*fact(num - 1)=4*6
//             3*fact(num - 1)=3*2
//                 2*fact(num - 1)= 2*1
//                     1

//********************************************************************


// 2. Palindrome  // Done By ME

let re = '';
const pal = (w, n) => {
    if (w.length === n) {
        return;
    }
    pal(w, n + 1);
    re += w[n];
    console.log(re);
    console.log(re + 'sagar')

}

pal('sagar', 0);

//********************************************************************


// 3. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. 

// Trial By ME

let a = 0;
let b = 0;
let c;
let d;
let gcds = (x, y) => {
    if (x % 2 === 1 || y % 2 === 1) {
        return x || y;
    } else {
        gcds(x / 2, y / 2);
        a += 1;
        b += 1;

    }
}

// Done By Others

// let gcds = (x, y) => {
//     if (x === 0) {
//         return y;
//     } else if (y === 0) {
//         return x;
//     } else if (x === y) {
//         return a;
//     } else if (a > b) {
//         return gcds(a - b, b);
//     } else {
//         return gcds(a, b - a)
//     }
// }
// console.log(gcds(98, 56));


//********************************************************************


//Write a JavaScript program to get the integers in range (x, y).

// Done By ME

let result = [];
const rang = (a, b) => {
    if (a === b) {
        return a;
    } else {
        result.push(a);
        rang(a + 1, b);
    }
}
rang(5, 10);
console.log(result);



// Done By Others

// var range = function(start_num, end_num) 
// {
//   if (end_num - start_num === 2) 
//   {
//     return [start_num + 1];
//   } 
//   else 
//   {
//     var list = range(start_num, end_num - 1);
//     list.push(end_num - 1);
//     return list;
//   }
// };



//********************************************************************

//Write a JavaScript program to compute the sum of an array of integers.

// Done By ME

let final = [5, 5, 5, 5, 5];
let aa = 0;
let bb = 0;
let total = (x, bb) => {

    if (x.length === bb) {
        return x;
    } else {
        aa += x[bb];
        // console.log(aa);
        total(x, bb + 1);
        return aa;
        // console.log(aa);
    }
}
total(final, 0);
console.log(aa);


//********************************************************************


// Write a JavaScript program to compute the exponent of a number.

// Done By ME

let multis = 1;
let total = (n1, n2) => {
    if (n2 === 0) {
        return n1;
    } else {
        multis *= n1;
        total(n1, n2 - 1);
    }
}

total(5, 5);
console.log(multis);


// Done By Others


// var exponent = function(a, n) 
// {
//    if (n === 0) 
//    {
//     return 1;
//     }
//   else 
//   {
//     return a * exponent(a, n-1);
//   }
// };

// console.log(exponent(4, 2));

//********************************************************************


//Write a JavaScript program to get the first n Fibonacci numbers.

// Done By ME


let final = [];
let a = 0;
let b = 1;
let fib = (n) => {
    if (n === 1) {
        return n;
    } else {
        final.push(a);
        final.push(b);

        a = a + b;
        b = a + b;

        fib(n - 1);
    }

}
fib(8)
console.log(final);


// ***************************


// var fibonacci_series = function(n) {
//     if (n === 1) {
//         return [0, 1];
//     } else {
//         var s = fibonacci_series(n - 1);
//         s.push(s[s.length - 1] + s[s.length - 2]);
//         return s;
//     }
// };

// console.log(fibonacci_series(8));


//********************************************************************


//Write a merge sort program in JavaScript.

// Done By Others


// Array.prototype.merge_Sort = function() {
//     if (this.length <= 1) {
//         return this;
//     }

//     var half = parseInt(this.length / 2);
//     var left = this.slice(0, half).merge_Sort();
//     var right = this.slice(half, this.length).merge_Sort();
//     var merge = function(left, right) {
//         var arry = [];
//         while (left.length > 0 && right.length > 0) {
//             arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
//         }
//         return arry.concat(left).concat(right);
//     };

//     return merge(left, right);
// };

// var a = [34, 7, 23, 32, 5, 62];
// console.log(a.merge_Sort());



//********************************************************************



//Write a JavaScript program for binary search.


// Done By Others

// Array.prototype.br_search = function(target) {
//     var half = parseInt(this.length / 2);
//     if (target === this[half]) {
//         return half;
//     }
//     if (target > this[half]) {
//         return half + this.slice(half, this.length).br_search(target);
//     } else {
//         return this.slice(0, half).br_search(target);
//     }
// };

// l = [0, 1, 2, 3, 4, 5, 6];

// console.log(l.br_search(5));