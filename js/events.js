$(document).ready(function(){

	$('#add').on('click','#addButton',addItem)

		.on('keyup','#addText',function (event) {

			if ( event.which == 13 ) {

				addItem.call($( this ));

			}

		});

	$('#itemList').sortable()

		.on('click','.delete',deleteItem)

		.on('click','.itemText',editItem);

});