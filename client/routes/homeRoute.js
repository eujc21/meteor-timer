var HomeController = RouteController.extend({
    template: 'home'
});
Router.map(function() {
    this.route('home', {
        path: '/',
        controller: HomeController
    });
    this.route('formCreate', {
        path: '/form-creator',
    });
    this.route('generatedForm', {
        path: '/generated-form',
    });
    this.route('timer', {
      path: '/timer',
    });
    this.route('forms', {
      path: '/export-form',
    });
});
