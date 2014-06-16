function addItem(){

	$('<li class="itemCounter"><div class="itemBody"><button name="delete" class="delete">X</button><p class="itemText">'

	 + $(this).closest('#add').find('#addText').val() + 

	'</p><button name="editButton" class="editButton">Edit</button><input type="checkbox" name="itemCheck" value="itemCheck"></div></li>')

	.appendTo($('#itemList'));

}

function deleteItem(event){

	$(event.target).closest('.itemCounter').remove();

}

function editItem(event){

	textToEdit = $( event.target ).closest('.itemBody').find('.itemText');

	textToEdit.replaceWith(

		$('<input type="text" class="editText" value="' 
		
		+ textToEdit.text() + 

		'">')

	);

	$('.editText').focus();

}