
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

 		//trying to make a for loop
 		for(var i=0; i < 10; i++) {
 			$("ul").append("<li>" + data.result[i].body + "</li>");
 		}
 		
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
		var spanId = this.id.replace("item_", "");
		document.getElementById("li_" + spanId).style.display = "none";
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
		/* Double Click doesn't work on mobile
		span.onclick = renameItem;
		span.ondblclick = removeItem;*/

		
		listItem.prependChild(checkBox);
		listItem.prependChild(span);
		list.prependChild(listItem);



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
