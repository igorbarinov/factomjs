var rest = require('restler');

module.exports = {
	connect: function() {
		return 
	},

	creditbalance: function () {
		rest.get('http://45.55.165.169:8088/v1/creditbalance?&pubkey=wallet').on('complete', function(data) {
			console.log(data); // auto convert to object
		});
	}
};