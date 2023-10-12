//GET ELEMENT BY ID

console.log(document.getElementById('items'));
console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
headerTitle.textContent="hello";
headerTitle.innerText="Goodbye";
console.log(headerTitle.textContent);
headerTitle.innerHTML='<h3>Hello</h3>';
headerTitle.style.borderBottom='solid 3px #000';

//GET ELEMENT BY CLASS NAME

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
