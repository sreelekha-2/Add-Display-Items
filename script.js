console.log('Hello!');

let userInput = document.getElementById('userInput');

let addBtn = document.getElementById('addBtn');

let displayBtn = document.getElementById('displayBtn');

let listContainer = document.getElementById('list');

let inputVal;

let arr = [];
userInput.onchange = function (e) {
  inputVal = e.target.value;
};

addBtn.onclick = function () {
  arr.push(inputVal);
  alert(`item added at index:${arr.indexOf(inputVal)}`);
  userInput.value = '';
};

displayBtn.onclick = function () {
  const result = arr.map((ele, index) => `<li>Element ${index}: ${ele}</li>`);

  listContainer.innerHTML = result;
};
