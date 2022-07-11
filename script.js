console.log('Hello!');

let userInput = document.getElementById('userInput');

let addBtn = document.getElementById('addBtn');

let displayBtn = document.getElementById('displayBtn');

let listContainer = document.getElementById('list');

let arr = [];

addBtn.onclick = function () {
  arr.push(userInput.value);
  alert(`item added at index:${arr.indexOf(userInput.value)}`);
  userInput.value = '';
};

displayBtn.onclick = function () {
  const result = arr.map((ele, index) => `<li>Element ${index}: ${ele}</li>`);

  listContainer.innerHTML = result;
};
