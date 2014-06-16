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

	editText = $( event.target ).closest('.itemBody').find('.itemText');

	editText.replaceWith(

		$('<input type="text" class="editText" value="' 
		
		+ editText.text() + 

		'">')

	);

	$( event.target ).closest('.itemBody').find('.editText').focus();

}

function editConfirm(event){

	editText = $( event.target ).closest('.itemBody').find('.editText');

	editText.replaceWith(

		$('<p class="itemText">'

	 	+ editText.val() + 

		'</p>')

	);

}

function editRevert(event){

	$( event.target ).replaceWith(

		$('<p class="itemText">'

	 	+ editText.text() + 

		'</p>')

	);

}