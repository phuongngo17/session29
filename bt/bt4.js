
function countChar(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
let inputStr = prompt("Nhập vào chuỗi:");
let inputChar = prompt("Nhập vào ký tự:");
let result = countChar(inputStr, inputChar);
alert(`Số lần xuất hiện của ký tự "${inputChar}" trong chuỗi "${inputStr}" là ${result}.`);
