let body = document.body;
let unorderedList = body.querySelector("ul");
let listItems = document.createElement("li");

let listArray = [listItems, listItems, listItems, listItems, listItems];
let imageSrc = [
  "images/apple.jpeg",
  "images/banana.jpeg",
  "images/grapes.jpeg",
  "images/mango.jpeg",
  "images/orange.jpeg",
];

for (let i = 0; i < listArray.length; i++) {
  let image = document.createElement("img");
  image.src = imageSrc[i];
  listArray[i].appendChild(image);
  unorderedList.appendChild(listArray[i]);
}

//Q2

function linearSearch(numberArray, targetNumber) {
  let isFound = false;
  let index;
  for (let i = 0; i < numberArray.length; i++) {
    if (parseInt(numberArray[i], 10) == parseInt(targetNumber, 10)) {
      isFound = true;
      index = i;
      return index;
    }

  }
  return -1;
}

console.log(
  linearSearch(prompt("please enter an array"), prompt("Enter target number"))
);
