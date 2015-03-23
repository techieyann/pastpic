Template.layout.events = {
	'click .logout': function (e) {
		e.preventDefault();
		if (Meteor.user()) {
			Meteor.logout(function () {
				Router.go('index');
			});
		}
	}
};

Template.registerHelper('currentRoute', function (route) {
	return Router.current().route.getName() == route;
});
