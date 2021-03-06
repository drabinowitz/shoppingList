function addItem(){

	var addValue = $(this).closest('.add').find('.addText').val();

	if ( addValue ){

		$( '.itemList' ).append(

			$('<li>').attr('class','itemCounter col-md-12 col-xs-12').append(

				$('<div>').attr('class','itemBody').append(

					$('<button>').attr({

						name: "delete",
						class: "delete"

					}).append(

						$('<img>').attr('src','images/deleteIcon.png')

					)

				).append(

					$('<p>').attr('class','itemText').append(

						addValue

					)

				).append(

					$('<input>').attr({

						type: "checkbox",
						name: "itemCheck",
						value: "itemCheck",
						class: "itemCheck"

					})

		)));

		$('.itemCounter:last-of-type').addClass('beforeAddItem').css('opacity');

		$('.itemCounter:last-of-type').addClass('afterAddItem').removeClass('beforeAddItem');

		$( '.addText' ).select();
	
	} else {

		$('.errorBar').slideDown(500).delay(3000).fadeOut(1000);

	}
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

function smoothClass(event){

	$( this ).toggleClass('afterAddItem');

	if ( event.type == "sortstop"){

		$( this ).removeAttr('style')

			.siblings().andSelf().removeClass('marginTransition');

	}

}

function smoothChange(){

	$( this ).siblings().andSelf().addClass('marginTransition');

}

function checkItem(){

	$( event.target ).closest('.itemCounter').toggleClass('checkedItem');

}