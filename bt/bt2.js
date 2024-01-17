function findLongestElement(arr) {
  let longestElement = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestElement.length) {
      longestElement = arr[i];
    }
  }
  return longestElement;
}

let randomArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
console.log("Mảng ngẫu nhiên: " + randomArray);

let longestElement = findLongestElement(randomArray.map(String));
console.log("Phần tử có độ dài lớn nhất trong mảng: " + longestElement);
