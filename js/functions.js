function addItem(){

	$('<li class="itemCounter"></li><div class="itemBody"><button name="delete" class="delete">X</button><p class="itemText">'

	 + $(this).closest('#add').find('#addText').val() + 

	'</p><input type="checkbox" name="itemCheck" value="itemCheck"></div>')

	.appendTo($('#itemList'));

}

function deleteItem(event){

	itemToDelete = $(event.target).closest('.itemBody');

	itemToDelete.prev().remove();

	itemToDelete.remove();

}

function editItem(event){

	textToEdit = $(event.target);

	textToEdit.replaceWith(

		$('<input type="text" class="editText" value="' 
		
		+ textToEdit.text() + 

		'">')

	);

	$('.editText').focus();

}