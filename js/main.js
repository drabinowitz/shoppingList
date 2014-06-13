var itemText;
var itemBody;

$(document).ready(function(){
	$('#addButton').click(function(){
		itemText = $(this).closest('#add').find('#addText').val();
		constructItem(itemText);
		$(itemBody).appendTo($('#itemList'));
	});
});

function constructItem(itemText){
	itemBody = '<li class="itemCounter"></li><div class="itemBody"><button name="delete" class="delete">X</button><p class="itemText">' + itemText + '</p><input type="checkbox" name="itemCheck" value="itemCheck"></div>';
}