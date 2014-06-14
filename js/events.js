$(document).ready(function(){

	$('#itemList').sortable();

	$('#add').on('click','#addButton',addItem);

	$('#itemList').on('click','.delete',deleteItem)

	.on('click','.itemText',editItem);

});