
//each item should look like this: 
// <li><input type ="checkbox" /> <span> Write this tutorial </span></li>

//lessons learned 
//- avoid global variables
// - strive to make functions reusable

function updateItemStatus() {
	var cbID = this.id.replace("cb_", "");
	var itemText = document.getElementById("item_" + cbID);

	if (this.checked) {
		itemText.className = "checked";

	} else {
		itemText.className = "";
	}
	


}


function addNewItem(list, itemText) {
	totalItems++;

	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	checkBox.type = "checkbox";
	checkBox.id = "cb_" + totalItems;
	checkBox.onclick = updateItemStatus;

	var span = document.createElement("span");
	span.innerText= itemText;
	span.id = "item_" + totalItems;
	listItem.appendChild(checkBox);
	listItem.appendChild(span);
	list.appendChild(listItem);



}

var totalItems = 0;

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {

	var inItemText = document.getElementById("inItemText");

	var itemText = inItemText.value;

	if (!itemText || itemText == "") {
		return false;
	}
	
	addNewItem(document.getElementById("todoList"), itemText);
 	
 	inItemText.focus();	
 	inItemText.select();

	};

