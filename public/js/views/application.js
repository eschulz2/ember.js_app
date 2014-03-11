InfoTracker.ApplicationView = Ember.View.extend({
  templateName: 'application'
});

InfoTracker.InfoListingsView = Ember.View.extend({
    click: function(event) {
        var content = this.get('content');
        InfoTracker.selectedInfoController.select(content);
    },
    nextInfo: function(event) {
        InfoTracker.selectedInfoController.next();
    }
});

InfoTracker.SelectedInfoView = Ember.View.extend({});

InfoTracker.InfoDetailsView = Ember.View.extend({
    contentBinding: 'InfoTracker.selectedInfoController.selectedInfo'
});
