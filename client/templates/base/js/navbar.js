Template.navbar.helpers({
	activeRoute: function (route) {
		return (Router.current().route.getName() == route ? 'active':'');
	}
});


Template.navbar.onRendered(function () {
		$(document).ready(function () {
			$('.button-collapse').sideNav({
				menuWidth:300,
				edge: 'right',
				closeOnClick: true
			});
		});
});
