InfoTracker = Ember.Application.createWithMixins({
	ready: function() {
		InfoTracker.GetInfoItems();   // this triggers an AJAX call to Clojure REST interface
	}
});

