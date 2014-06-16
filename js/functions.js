function addItem(){

	$('<li class="itemCounter"><div class="itemBody"><button name="delete" class="delete">X</button><p class="itemText">'

	 + $(this).closest('#add').find('#addText').val() + 

	'</p><input type="checkbox" name="itemCheck" value="itemCheck"></div></li>')

	.appendTo($('#itemList'));

	$('.itemCounter:last-of-type').css('opacity');

	$('.itemCounter:last-of-type').toggleClass('addItem');

	$( '#addText' ).select();

}

function deleteItem(event){

	$(event.target).closest('.itemCounter').bind('webkitTransitionEnd', function(){

		$( this ).remove();

	})

	.toggleClass('addItem');

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