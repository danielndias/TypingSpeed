var api = {};

var sentences = [
	{_id: 0, quote:'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.', time: 20 },
	{_id: 1, quote:'All computers wait at the same speed.',time: 10 },
	{_id: 2, quote:'Intel inside is a Government warning required by law.', time: 10 },
	{_id: 3, quote:'A good programmer looks both ways before crossing a one-way street.', time: 15 },
	{_id: 4, quote:'Artificial intelligence usually beats natural stupidity.', time: 15 },
	{_id: 5, quote:'Any fool can use a computer. Many do.', time: 10 },
	{_id: 6, quote:'First solve the problem. Then, write the code.', time: 12 },
	{_id: 7, quote:'It works on my machine.', time: 7 },
	{_id: 8, quote:'Keyboard not found… Press any key to continue.', time: 10},
	{_id: 9, quote:'Weeks of coding can save you hours of planning.', time: 15},

	];

api.list = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(sentences[req.query.id]);

		res.json(sentences);
	},1500);

};

module.exports = api;
