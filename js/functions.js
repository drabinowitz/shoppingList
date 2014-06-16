function addItem(){

	$('<li class="itemCounter"><div class="itemBody"><button name="delete" class="delete">X</button><p class="itemText">'

	 + $(this).closest('#add').find('#addText').val() + 

	'</p><input type="checkbox" name="itemCheck" value="itemCheck"></div></li>')

	.appendTo($('#itemList'));

}

function deleteItem(event){

	$(event.target).closest('.itemCounter').remove();

}

function editItem(event){

	$( event.target ).replaceWith(

		$('<input type="text" class="editText" value="' 
		
		+ $( event.target ).text() + 

		'">')

	);

	$('.editText').focus();

}

function editConfirm(event){

	$( event.target ).replaceWith(

		$('<p class="itemText">'

	 	+ $( event.target ).val() + 

		'</p>')

	);

}