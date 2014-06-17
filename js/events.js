$(document).ready(function(){

	$('#addText').focus();

	$('#add').on('click','#addButton',addItem)

		.on('keyup','#addText',function (event) {

			if ( event.which == 13 ) {

				event.preventDefault();

				addItem.call($( this ));

			};

		});

	$('#itemList').sortable()

		.on('click','.delete',deleteItem)

		.on('click','.itemText',editItem)

		.on('blur','.editText',function (event) {

				editConfirm.call($( this ),event);

		})

		.on('keydown','.editText',function (event) {

			if ( event.which == 13 ) {

				event.preventDefault();

				$( event.target ).blur();

			};

		});

});