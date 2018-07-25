 module.exports = function(app) {

	var api = app.api.score;

	app.route('/score/')
		.get(api.list);

    app.route('/score/')
        .post(api.insert);
};
