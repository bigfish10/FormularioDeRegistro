$(document).ready(function() {
  $('#formularioderegistro').submit(function(event) {
    event.preventDefault();

    var formEl = $('#formularioderegistro');
    var submitButton = $('input[type=submit]', formEl);

    $.ajax({
      type: 'POST',
      url: formEl.prop('action'),
      accept: {
        javascript: 'application/javascript'
      },
      data: formEl.serialize(),
      beforeSend: function() {
        submitButton.prop('disabled', 'disabled');
        alert('Antes de enviar');
      }
    }).done(function(data) {
      alert('Datos Enviados');
      submitButton.prop('disabled', false);

      $.ajax({
      type: 'GET',
      url: 'https://formkeep.com/api/v1/forms/11f99ecb51cc/submissions.json?api_token=32f203d8af2ad36d5becbd991aef2cba'
      accept: {
        javascript: 'application/javascript'
 
       
      }
        }).done(function(data) {
      console.log(data);
    });
  });
});
