var itemText;
var itemBody;

$(document).ready(function(){
	$('#addButton').click(function(){
		itemText = $(this).closest('#add').find('#addText').val();
		addItem(itemText);
	});
});