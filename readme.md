[![Build Status](https://secure.travis-ci.org/sedlan/statsmix.png?branch=master)](http://travis-ci.org/sedlan/statsmix)

##Implementing statsmix library in node.js

---

statsmix library has only five API calls:

- **setAPIKey(key, callback)** - sets a global variable inside the library which is then used in all calls to StatsMix service. Callback variable can be omitted.
- **postTrack(metricName, trackData: {value, generatedAt, meta, refId, profileId}, callback)** - posts a track to StatsMix. If metricName does not exist, it is created. Only metricName variable is required
- **postMetric(metricName, metricData: {profileId, sharing, includeInEmail}, callback)** - creates a new metric. Only metricName is required.
- **putMetric(metricName, metricId, metricData: {profileId, sharing, includeInEmail}, callback)** - changes a metric. Fields metricName and metricId are required.
- **getMetrics(callback**) - returns a list of all metrics.

More information can be found at [StatsMix API Documentation page](https://www.statsmix.com/developers/documentation).
