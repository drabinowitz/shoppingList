var itemText;
var itemBody;
var itemToDelete;

$(document).ready(function(){

	$('#add').on('click','#addButton',addItem);

	$('#itemList').on('click','.delete',deleteItem);

});