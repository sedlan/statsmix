var API_key = '';
var server = 'api.statsmix.com/api/v2/';
var trackServer = server + 'track';
var metricsServer = server + 'metrics';

var request = require('request');

var setAPIKey = function(key, cb) {
	var err;
	var response = '';
	var result = {};
	if (key && cb && typeof cb === 'function') {
		err = false;
		API_key = key;
	}
	if (!key) {
		err = true;
		response = 'Wrong API key!';
	}
	if (cb) {
		cb(err, response, result);
	}
}

var postTrack = function(metricName, trackData, cb) {
	if (!cb) {
		if (trackData && typeof trackData === 'function') {
			cb = trackData;
			trackData = null;
		}
	}
	if (cb) {
		cb(true, 'Not implemented', {});
	}
}

var postMetric = function(metricName, metricData, cb) {
	if (!cb) {
		if (metricData && typeof metricData === 'function') {
			cb = metricData;
			metricData = null;
		}
	}
	if (cb) {
		cb(true, 'Not implemented', {});
	}
}

var putMetric = function(metricName, metricId, metricData, cb) {
	if (!cb) {
		if (metricData && typeof metricData === 'function') {
			cb = metricData;
			metricData = null;
		}
	}
	if (cb) {
		cb(true, 'Not implemented', {});
	}
}

var getMetrics = function(cb) {
	if (cb) {
		cb(true, 'Not implemented', {});
	}
}

module.exports = {
	setAPIKey: setAPIKey,
	postTrack: postTrack,
	postMetric: postMetric,
	putMetric: putMetric,
	getMetrics: getMetrics
}
