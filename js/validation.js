function validate(form) {
	fail = validateForename(form.firstname.value);
	fail += validateSurname(form.surname.value);
	fail += validateAge(form.mobilenumber.value);
	fail += validateEmail(form.email.value);
	
	if (fail=="")
		return true;
	else{
		alert(fail);
		return false;
	}
}
//Basically check if firstname is empty
function validatefirstname(field) {
	return (field =="") ? "No firstname was entered.\n" :"";
}

//Basically check if Surname is empty
function validateSurname (field) {
	return (field =="") ? "No Surname was entered.\n" :"";
}
//Check that the number is valid - adult age
function validateMobileNumber(field) {
	if (isNaN(field))
		return (field =="") ? "No Mobile Number was entered.\\n";
}

/* check that it looks like an email address i.e. contains at least one '.' and the @ symbol using a Regular expression */
function validateEmail(field) {
	if (field=="")
		return "No Email was entered.\n";
	else if (!((field.indexOf(".") > 0) &&
				(field. indexOf("@") > 0)) ||
				/[^a-zA-Z0-9.@_-]/.test(field))
				return "The Email address is invalid.\n";
				
				return "";
}