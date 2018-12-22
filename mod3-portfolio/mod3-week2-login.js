$(document).ready(()=> {
	console.log('document is ready');

var users = [{
		userEmail: 'alayna@gmail.com',
		userPassword: 'password'
	},
	{
		userEmail: 'ben@gmail.com',
		userPassword: 'Chupito1'
	},
	{
		userEmail: 'cathey@gmail.com',
		userPassword: 'Emerson1'
	},
	{
		userEmail: 'ellen@gmail.com',
		userPassword: 'Woofy1'
	},
];

$('.login-button').click(() => {
	function findUser() {
		var email = $('.input-email').val();
		var password = $('.input-password').val();
		var findUserEmail = users.find(user => user.userEmail === email);
		var findUserPassword = users.find(user => user.userPassword === password);
		var verifyUser = users.filter((c,i) => {
			if (c===findUserEmail && c===findUserPassword) {
				window.location.href = 'mod3-week2-homepage.html';
			}
			else {
				return null;
			}
		});
	}
	findUser();
});
});
