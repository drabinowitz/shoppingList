$(document).ready(function(){

	$('#add').on('click','#addButton',addItem)

		.on('keyup','#addText',function (event) {

			if ( event.which == 13 ) {

				event.preventDefault();

				addItem.call($( this ));

			}

		});

	$('#itemList').sortable()

		.on('click','.delete',deleteItem)

		.on('click','.itemText',editItem)

		.on('click','.editButton',function(event){

			if ( $( event.target ).prev().hasClass("itemText") ){

				editItem.call($( '.itemText' ),event)

			}

		});

});