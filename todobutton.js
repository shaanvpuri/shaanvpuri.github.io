
//each item should look like this: 
// <li><input type ="checkbox" /> <span> Write this tutorial </span></li>

//lessons learned 
//- avoid global variables
// - strive to make functions reusable



function addNewItem(list, itemText) {
	var listItem = document.createElement("li");
	listItem.innerText = itemText;

	list.appendChild(listItem);

}

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {

	var inItemText = document.getElementById("inItemText");

	var itemText = inItemText.value;

	if (!itemText || itemText == "") {
		return false;
	}
	
	addNewItem(document.getElementById("todoList"), itemText);
 

	};

