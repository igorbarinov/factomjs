var rest = require('restler');

module.exports = function (options) {
	var HOST = options.host,
		PORT = options.port,
		BASE_URI = HOST + ":" + PORT;

	console.log(rest.defaults)

	return {
		connect: function() {
			return 
		},

		creditbalance: function (pubkey) {
			rest.get(BASE_URI + '/v1/creditbalance', {query: {pubkey: pubkey}}).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		},

		dblocksbyrange: function (start, end) {
			rest.get(BASE_URI + '/v1/dblocksbyrange' + '/' + start + '/' + end).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		},

		buycredit: function (to, value) {
			rest.get(BASE_URI + '/v1/buycredit', {query: {to: to, value: value}}).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		},

		submitentry: function (chainId, extIds, data) {
			options = {
				headers: {
					'content-type': 'application/x-www-form-urlencoded',
 					'accept-encoding': 'gzip'
				}
			}

			entry = {
				"ChainID": chainId, 
				"ExtIDs": extIds.map(function(extId) { return Buffer(extId).toString('hex'); }),
				"Data": Buffer(data).toString('hex')
			};

			jsonData = {datatype: 'entry', entry: JSON.stringify(entry), format: 'json'};
			
			// rest.postJson(BASE_URI + '/v1/submitentry', jsonData, options).on('complete', function(data) {
			// 	console.log(data); // auto convert to object
			// });
			
			rest.post(BASE_URI + '/v1/submitentry', {data: jsonData, headers: {
					'content-type': 'application/x-www-form-urlencoded',
 					'accept-encoding': 'gzip',
 					'connection':''
				}}).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		},

		entry: function (hash) {
			rest.get(BASE_URI + '/v1/entry' + '/' + hash).on('complete', function(data) {
				console.log(data); // auto convert to object
			});
		}
	}
};