var itemText;
var itemBody;

/*$(document).ready(function(){
	$('#addButton').click(function(){
		itemText = $(this).closest('#add').find('#addText').val();
		addItem(itemText);
	});
});*/

$(document).ready(function(){

	$('#add').on('click','#addButton',function(){

		itemText = $(this).closest('#add').find('#addText').val();
		
		addItem(itemText);

	});

	$('#itemList').on('click','.delete',function(event){

		$(event.target).closest('.itemBody').remove();

	});

});