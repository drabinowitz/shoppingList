function addItem(){

	itemText = $(this).closest('#add').find('#addText').val();

	itemBody = '<li class="itemCounter"></li><div class="itemBody"><button name="delete" class="delete">X</button><p class="itemText">' + itemText + '</p><input type="checkbox" name="itemCheck" value="itemCheck"></div>';

	$(itemBody).appendTo($('#itemList'));
}

function deleteItem(event){

		itemToDelete = $(event.target).closest('.itemBody');

		itemToDelete.prev().remove();

		itemToDelete.remove();

}