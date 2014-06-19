function addItem(){

	$( '.itemList' ).append(

		$('<li>').attr('class','itemCounter col-md-4 col-md-offset-4').append(

			$('<div>').attr('class','itemBody').append(

				$('<button>').attr({

					name: "delete",
					class: "delete"

				}).append("X")

			).append(

				$('<p>').attr('class','itemText').append(

					$(this).closest('.add').find('.addText').val()

				)

			).append(

				$('<input>').attr({

					type: "checkbox",
					name: "itemCheck",
					value: "itemCheck"

				})

	)));

	$('.itemCounter:last-of-type').addClass('beforeAddItem').css('opacity');

	$('.itemCounter:last-of-type').addClass('afterAddItem').removeClass('beforeAddItem');

	$( '.addText' ).select();

}

function deleteItem(event){

	$( event.target ).closest('.itemCounter').bind('webkitTransitionEnd', function(){

		$( this ).remove();

	})

	.addClass('beforeAddItem');

}

function editItem(event){

	$( event.target ).replaceWith(

		$('<input>').attr({

			type:"text",
			class:"editText",
			value:$( event.target ).text()

		})

	);

	$('.editText').focus();

}

function editConfirm(event){

	$( event.target ).replaceWith(

		$('<p>').attr('class','itemText').append(

			$( event.target ).val()

		)

	);

}

function smoothClass(){

	$( this ).removeClass('afterAddItem');

}

function unSmoothClass(){

	$( this ).addClass('afterAddItem')

		.removeAttr('style')

		.siblings().andSelf().removeClass('marginTransition');

}

function smoothChange(){

	$( this ).siblings().andSelf().addClass('marginTransition');

}