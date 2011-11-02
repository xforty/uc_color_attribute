$(document).ready(function(){
  $('div.colors-color').click(function() {
    var attrId = $(this).attr('attrid');
    var oId = $(this).attr('oid');
    var title = Drupal.t($(this).attr('title'));
    var text = Drupal.t('selected');

    $('#edit-attributes-'+attrId).val(oId).trigger('change');

    $('#uc-color-attribute-' + attrId + '-selected').text(title + ' ' + text);
  });
});