// Contact page
function onSubmit(event) {
	event.preventDefault();
	console.log("i've hit this line");
	let name = document.getElementById('fullName').value;
	let phone = document.getElementById('phone').value;
	let customerMessage = document.getElementById('customer-message').value;
	let emailAddress = document.getElementById('email').value;
	let tv = document.getElementById('tv');
	let radio = document.getElementById('radio');
	let wordOfMouth = document.getElementById('wordOfMouth');
	let confrence = document.getElementById('confrence');
	let otherOption = document.getElementById('otherOption');
	let phoneCall = document.getElementById('phoneCall');
	let eMail = document.getElementById('eMail');
	let text = document.getElementById('text');
	let fax = document.getElementById('fax');

	if (name.length < 2 || name == '') {
		alert('This is not a name. Please enter a valid name.');
	}
	if (!name.match(/^[a-zA-Z\s]*$/)) {
		console.log(name);
		alert('Please enter a valid name. Only Alphabet is allowed in this feild');
	}
	if (!phoneCall.checked && !eMail.checked && !text.checked && !fax.checked) {
		alert('Please let us know how you would like to be contacted');
	}
	console.log(emailAddress);
	if (emailAddress == '') {
		alert('Email address should be entered');
	}
	console.log(phone);
	if (isNaN(phone) || phone.length != 10) {
		alert('Please enter a valid phone number. Only numbers are allowed in this feild');
	}
	if (!tv.checked && !radio.checked && !wordOfMouth.checked && !confrence.checked && !otherOption.checked) {
		alert('Please let us know how you heard of us');
	}
	console.log(customerMessage);
	if (customerMessage.length < 2 || customerMessage == '') {
		alert('Not a valid message.');
	}
}
