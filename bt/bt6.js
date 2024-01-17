function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let myString = "chuỗi bất kỳ";
let capitalizedString = capitalizeFirstLetter(myString);

console.log(`Chuỗi ban đầu: ${myString}`);
console.log(`Chuỗi đã được viết hoa chữ cái đầu: ${capitalizedString}`);
