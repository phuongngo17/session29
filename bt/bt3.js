// chuỗi
let myString = "Hello, world!";

// Hàm tính số ký tự trong chuỗi (không tính ký tự trống)
function countCharacters(str) {
  // Loại bỏ các ký tự trống trong chuỗi
  let stringWithoutSpaces = str.replace(/\s/g, "");

  // Trả về số ký tự trong chuỗi
  return stringWithoutSpaces.length;
}

// Gọi hàm và in kết quả
let result = countCharacters(myString);
console.log(result);