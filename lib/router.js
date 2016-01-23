// Iron Router Configuration:
// ==========================
Router.route('/',{
	name: 'landingpage',
	template: 'dashboard',
  layoutTemplate: 'layout'
});

Router.route('/details',{
	name: 'details',
	template: 'details',
  layoutTemplate: 'layout'
});

Router.route('/testSuite',{
	name: 'testSuite',
	template: 'testSuite',
  layoutTemplate: 'layout'
});
