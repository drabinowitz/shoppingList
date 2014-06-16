$(document).ready(function(){

	$('#add').on('click','#addButton',addItem);

	$('#itemList').sortable()

		.on('click','.delete',deleteItem)

		.on('click','.itemText',editItem);

});