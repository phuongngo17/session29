function test(number) {
    if (number % 2 == 0) {
        return "là số chẵn"
    } else {
        return "là số lẻ"
    }
}
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);
let c = Math.floor(Math.random() * 100);

console.log(`Số thứ nhất ${a} ${test(a)}`);
console.log(`Số thứ hai ${b} ${test(b)}`);
console.log(`Số thứ ba ${c} ${test(c)}`);