function validateForm() {
	// Get form inputs
	var name = document.getElementById("name").value.trim();
	var email = document.getElementById("email").value.trim();
	var password = document.getElementById("password").value.trim();
	var confirmPassword = document.getElementById("confirm-password").value.trim();

	// Check name field
	if(name.length < 2) {
		document.getElementById("heading2").innerHTML="Invalid data ";
		return false;
	}
  
	// Check email field
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if(!emailRegex.test(email)) {
		document.getElementById("heading4").innerHTML="Invalid email ";
		return false;
	}

	// Check password field
	if(password.length < 6) {
		document.getElementById("heading5").innerHTML="password should be more than 6  ";
		return false;
	}

	// Check confirm password field
	if(confirmPassword != password) {
		document.getElementById("heading6").innerHTML="password does not match ";
		return false;
	}
	

	return true;
}