$(document).ready(function(){

	$('.addText').focus();

	$('.add').on('click','.addButton',addItem)

		.on('keyup','.addText',function (event) {

			if ( event.which == 13 ) {

				event.preventDefault();

				addItem.call($( this ));

			};

		});

	$('.itemList').sortable({

		'start':function (event,ui){

			smoothClass.call( $( ui.item ) );

		},

		'stop':function (event,ui){

			unSmoothClass.call( $( ui.item ) );

		},

		'change':function (event,ui){

			smoothChange.call( $( ui.item ) );

		},

		'placeholder':'marker'

	})

		.on('click','.delete',deleteItem)

		.on('click','.itemText',editItem)

		.on('blur','.editText',function (event) {

				editConfirm.call($( this ),event);

		})

		.on('keyup','.editText',function (event) {

			if ( event.which == 13 ) {

				event.preventDefault();

				$( event.target ).blur();

			};

		})

		.on('change','.itemCheck',checkItem);

});