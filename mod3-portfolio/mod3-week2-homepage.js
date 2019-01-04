$(document).ready(()=> {
	console.log('document is ready');

$('.logout-button').click(() => {
	window.location.href = 'mod3-week2-login.html';
});

$('.calculator').click(() => {
	window.location.href = 'mod3-week1/mod3-week1-calc.html';
});

$('.shopping-list').click(() => {
	window.location.href = 'mod3-week3/shopping-list.html';
});

$('.tip-calculator').click(() => {
	window.location.href = 'mod3-week4/tip-calculator.html';
});

$('.show-sidenav').click(() => {
	$('.sidenav').show();
	$('.sidenav-collapsed').hide();

});

$('.collapse-sidenav').click(() => {
	$('.sidenav-collapsed').show();
	$('.sidenav').hide();

});

});
