module.exports = function(app) {

	var api = app.api.sentences;

	app.route('/sentences/')
		.get(api.list);
};
