var msgError = '<div id="error"><i class="fas fa-times"></i><div class="text"><p>Invalid email and/or password. Please try again.</p></div></div>';
var animateSpeed = 300;
/*---------------------------------------------------------------------------------------------*/
// BEGIN DOCUMENT READY /////////////////////////////////////////////////////
$(document).ready(function() {
/*---------------------------------------------------------------------------------------------*/
// Error
	if(window.location.href.indexOf('fail=1') != -1 ) {
	    $('.msg').html(msgError);
	}
// Show Message Box - Get Messages
	if ($('.msg').find('#error').length ) {
		$('.msg').slideDown(animateSpeed);
	}
// Remember Me
	$('form#webmail').submit(function(event) {
		sessionStorage.webmail_email = $('form#webmail input[name=user_name]').val().toLowerCase();
		if ($('form#webmail input[name=remember]').is(':checked')) {
			localStorage.webmail_email = $('form#webmail input[name=user_name]').val().toLowerCase();
			localStorage.webmail_remember = $('form#webmail input[name=remember]').val();
		} else {
			localStorage.webmail_email = '';
			localStorage.webmail_remember = '';
		}
	});
	if (localStorage.webmail_remember && localStorage.webmail_remember != '') {
		$('form#webmail input[name=user_name]').val(localStorage.webmail_email);
		$('form#webmail input[name=remember]').attr('checked', 'checked');
	} else {
		$('form#webmail input[name=user_name]').val('');
		$('form#webmail input[name=remember]').removeAttr('checked');
	}
	if (sessionStorage.webmail_email && sessionStorage.webmail_email != '') {
		$('input[name=user_name]').val(sessionStorage.webmail_email);
	}
/*---------------------------------------------------------------------------------------------*/
// END DOCUMENT READY
});