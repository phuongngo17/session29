let arr = [1, 2, 3, 4, 5];
let n = + prompt("nnhập vào một số: ");
let result = find(arr,n);
console.log(`Cặp số trong mảng đã khai báo sao cho tổng của cặp số tìm được bằng với số đã nhập vào là: ${result}`);

function find(arr, n) {
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] == n) {
                return [arr[i], arr[j]];
            }
        }
    }
    return "không tìm thấy cặp số tìm thấy trong mảng";
}