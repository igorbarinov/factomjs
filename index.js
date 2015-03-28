var rest = require('restler');

module.exports = function (options) {
	var HOST = options.host,
		PORT = options.port,
		BASE_URI = HOST + ":" + PORT;

	return {
		connect: function() {
			return 
		},

		creditbalance: function (pubkey) {
			rest.get(BASE_URI + '/v1/creditbalance', {pubkey: pubkey}).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		},

		dblocksbyrange: function (start, end) {
			rest.get(BASE_URI + '/v1/dblocksbyrange' + '/' + start + '/' + end).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		},

		buycredit: function (to, value) {
			rest.get(BASE_URI + '/v1/buycredit', {to: to, value: value}).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		}
	}
};