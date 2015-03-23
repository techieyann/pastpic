Router.map(function () {
	this.route('index', {
		path: '/'
	});
	this.route('browse', {
		path: '/browse'
	});
	this.route('yours', {
		path: '/user'
	});
	this.route('settings', {
		path: '/user/settings'
	});
	this.route('about', {
		path: '/about'
	});
	this.route('accountForms', {
		path: '/login'
	});
});
