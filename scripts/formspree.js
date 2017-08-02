var $modal = $('#modal-form');
var $contactForm = $('#modal-form form');
var $formSubmit = $('#form-submit');

$contactForm.submit(function(e) {
	e.preventDefault();

	$.ajax({
		url: $(this).attr('action'),
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
      $modal.closeModal();
			$formSubmit.empty().append('<div id="form-submit-message" class="alert alert--loading flex">Sending message…</div>').openModal();
		},
		success: function(data) {
			$formSubmit.empty().append('<div id="form-submit-message" class="flex"><h4>Perfect, your message has been sent!</h4></div>');
      // $modal.find('input').val('');
      $contactForm.trigger('reset');
    	},
		error: function(err) {
			$formSubmit.empty().append('<div id="form-submit-message" class="flex"><h4>Oh dear, there was an error, apologies.</h4><h5>Please try again.</h5></div>');
		}
	});
});
