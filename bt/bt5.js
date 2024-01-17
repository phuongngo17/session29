// Khai báo mảng chứa nhiều chuỗi bất kỳ
let arr = ['chuỗi 1', 'chuỗi 2', 'chuỗi 3', 'chuỗi 4', 'chuỗi 5'];

//người dùng nhập vào một chuỗi bất kỳ
let inputString = prompt('Nhập vào một chuỗi bất kỳ: ');

// Xây dựng hàm có 2 tham số là mảng và chuỗi, kết quả trả về là tất cả các phần tử trong mảng có chứa chuỗi vừa nhập
function findStringInArray(arr, inputString) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(inputString) !== -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

// In kết quả trả về 
console.log(findStringInArray(arr, inputString));
