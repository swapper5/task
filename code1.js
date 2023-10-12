// //GET ELEMENT BY ID

// console.log(document.getElementById('items'));
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// headerTitle.textContent="hello";
// headerTitle.innerText="Goodbye";
// console.log(headerTitle.textContent);
// headerTitle.innerHTML='<h3>Hello</h3>';
// headerTitle.style.borderBottom='solid 3px #000';

// //GET ELEMENT BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';


// //GET ELEMENT BY TAG NAME
// var li =  document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);

//QUERYSELECTER

// const item2 = document.querySelector("#items li:nth-child(2)");
// item2.style.color = "green";

// const item3 = document.querySelector("#items li:nth-child(3)");
// item3.style.display = "none"

var itemList = document.querySelector("#items");
console.log(itemList.parentElement);
console.log(itemList.lastelementchild);
console.log(itemList.lastChild );
console.log(itemList.createchild);
console.log(itemList.firstElementChild);
console.log(itemList.firstChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.setAttribute);
console.log(itemList.createtextnode);
console.log(itemList.appendChild);
