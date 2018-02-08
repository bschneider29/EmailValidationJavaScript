$(document).ready(function(e) {
$('#submitbutton').click(function()) {
var sEmail = $('#uemail').val();
// Checking Empty Fields
if (validateEmail(sEmail) == false) {
e.preventDefault();
}
else {
alert('Nice!! your Email is valid, now you can continue..');
}

});
});
// Function that validates email address through a regular expression.
function validateEmail(sEmail) {
var filter = /[abc]/;
if (filter.test(sEmail) == false) {
alert('No entry');
return (false);
}
return (true);
}

