let a;
let b;

// Normal function
function tong(a, b) {
  return a + b;
}

console.log(tong(2, 7));

// Lambda function (có thể không có "arguments")

var message = () => console.log("Tích 2 số bằng:");
message();
var tich = (a, b) => {
  return a + b;
};
console.log(tich(1, 5));

// Anonymous function

var tong2So = function (a, b) {
  console.log("Tổng 2 số bằng:");
  console.log(a + b);
};
tong2So(3, 8);

// them thong tin cho Demo 1
