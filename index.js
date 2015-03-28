var rest = require('restler');

module.exports = function (options) {
	var HOST = options.host,
		PORT = options.port,
		BASE_URI = HOST + ":" + PORT;

	return {
		connect: function() {
			return 
		},

		creditbalance: function () {
			rest.get(BASE_URI + '/v1/creditbalance?&pubkey=wallet').on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		}
	}
};