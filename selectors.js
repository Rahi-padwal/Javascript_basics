//ELEMENT SELECTORS
//Single element selector
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));

//Multiple element selector
//console.log(document.querySelectorAll('.item')); //returns a node list of all elements with the class 'item'

//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item)); //iterating through the node list and logging each item


//MANIPULATING THE DOM
const ul = document.querySelector('.items');
//ul.remove(); //removes the entire unordered list
//ul.lastElementChild.remove(); //removes the last item in the list
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h4>Item 4</h4>"; //changes the last item to an h1 element with the text "Item 3"


const btn = document.querySelector('.btn');
btn.style.background = 'red'; //changes the background color of the button to red


//EVENTS
btn.addEventListener('click', e => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById('my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
});




