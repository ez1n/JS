/** 논리 연산자 (Logical Operator) */

// && 그리고
// || 또는
// ! 부정 (단항 연산자에서 온 것)
// !! 불리언 값으로 변환 (단항 연산자 응용버전)

// &&, ||
let num = 8;
if (num >= 0 || num > 20) {
  console.log("👍");
}

if (!(num >= 0 || num > 20)) {
  console.log("😀");
}

if (num !== 9) {
  console.log("✌️");
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 부정 연산자
console.log(!"text"); // false
console.log(!!"text"); // true
