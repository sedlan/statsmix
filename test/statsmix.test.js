QUnit.module('statsmix');

QUnit.test('statsmix', function () {
	statsmix.setAPIKey('1234', function(err, response, result) {
		ok(!err, 'SetAPIKey() ' + response);
		statsmix.postMetric('MetricName', function(err, response, result) {
			ok(!err, 'postMetric()');
			statsmix.postTrack('TrackName', function(err, response, result) {
				ok(!err, 'postTrack()');
				statsmix.putMetric('MetricName', '123', function(err, response, result) {
					ok(!err, 'putMetric()');
					statsmix.getMetrics(function(err, response, result) {
						ok(!err, 'getMetrics()');
					});
				});
			});
		});
	});
});