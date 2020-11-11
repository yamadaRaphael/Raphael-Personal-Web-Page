$(document).ready(function(){  
  $('.text-field-input').on('focus', function(){
    $(this).closest('div.nameEmail').addClass('focused');
    $(this).closest('div.textArea').addClass('focused');
  });
  
  $('.text-field-input').on('blur', function(){ 
    if( $(this).val() === '')
    {
      $(this).closest('div.nameEmail').removeClass('focused');
      $(this).closest('div.textArea').removeClass('focused');
    }
  });  
})

