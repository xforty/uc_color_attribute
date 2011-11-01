$(document).ready(function(){
	$('div.colors-color').click(function() {
		var attrId = $(this).attr('attrid');
		var oId = $(this).attr('oid');
		var exists = $('div#txtmsg').html();
		var title = $(this).attr('title');
    var text = Drupal.t('Selected Color');

		$('#edit-attributes-'+attrId).val(oId).trigger('change');

		if(exists){
			$('div#txtmsg').html('<strong>'+text+':</strong> '+title);
		}else{
			$('div#colors-background').before('<div id="txtmsg"><strong>'+text+':</strong> '+title+'</div>');
		}
	});
});