
//each item should look like this: 
// <li><input type ="checkbox" /> <span> Write this tutorial </span></li>

//lessons learned 
//- avoid global variables
// - strive to make functions reusable
$(document).ready(function() {
  console.log("document ready"); 

	Bebo.onReady(function(){

	Bebo.Db.get("todo", {}, function(err, data){
 		if(err){
 			return console.log('error saving data', err);
 		}
 		console.log('data', data);
 		$("ul").append("<li>" + data.result[0].body + "</li>");
 	});

	function updateItemStatus() {
		var cbID = this.id.replace("cb_", "");
		var itemText = document.getElementById("item_" + cbID);

		if (this.checked) {
			itemText.className = "checked";
		} else {
			itemText.className = "";
	}
	
	}

	function renameItem() {
		// this == span 
	}

	function removeItem() {

		//this == span 
		var spanID = this.id.replace("item_", "");
		document.getElementById("li_" + spanID).style.display = "none";
	}

	function addNewItem(list, itemText) {
		
		var date = new Date();
		var id = date.getHours() + "" + date.getMinutes() + date.getSeconds() + date.getMilliseconds();

		var listItem = document.createElement("li");
		listItem.id = "li_" + id;
		var checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		checkBox.id = "cb_" + id;
		checkBox.onclick = updateItemStatus;

		var span = document.createElement("span");
		span.innerText= itemText;
		span.id = "item_" + id;
		span.onclick = renameItem;
		span.ondblclick = removeItem;

		listItem.appendChild(checkBox);
		listItem.appendChild(span);
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
	 	
	 	inItemText.focus();	
	 	inItemText.select();

	 	Bebo.Db.save('todo', {"body": itemText}, function(err, data) {

	 		if(err){return console.log('error saving data', err)};
	 		console.log('data', data);
	 	});
	 	

		};


});

});
