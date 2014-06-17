function addItem(){

	$('#itemList').append(

		$('<li>').attr('class','itemCounter').append(

			$('<div>').attr('class','itemBody').append(

				$('<button>').attr({

					name: "delete",
					class: "delete"

				}).append("X")

			).append(

				$('<p>').attr('class','itemText').append(

					$(this).closest('#add').find('#addText').val()

				)

			).append(

				$('<input>').attr({

					type: "checkbox",
					name: "itemCheck",
					value: "itemCheck"

				})

	)));

	$('.itemCounter:last-of-type').css('opacity');

	$('.itemCounter:last-of-type').addClass('addItem');

	$( '#addText' ).select();

}

function deleteItem(event){

	$(event.target).closest('.itemCounter').bind('webkitTransitionEnd', function(){

		$( this ).remove();

	})

	.removeClass('addItem');

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