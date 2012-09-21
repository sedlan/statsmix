QUnit.module('statsmix');

QUnit.test('statsmix', function () {
	statsmix.setAPIKey('1234', function(err, response, result) {
		ok(!err, 'SetAPIKey()');
		statsmix.postMetric('MetricName', function(err, response, result) {
			ok(!err, 'postMetric()');
			statsmix.postTrack('TrackName', function(err, response, result) {
				ok(!err, 'postTrack()');
				statsmix.putMetric('TrackName', function(err, response, result) {
					ok(!err, 'putMetric()');
					statsmix.getMetrics('TrackName', function(err, response, result) {
						ok(!err, 'getMetrics()');
					});
				});
			});
		});
	});
});