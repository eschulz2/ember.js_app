InfoTracker.ApplicationController = Ember.Controller.extend();

InfoTracker.infoController = Ember.ArrayController.createWithMixins({
    content: [],
    addItem: function(item) {
        this.addObject(item);
    }});

InfoTracker.selectedInfoController = Ember.ObjectController.createWithMixins({
    selectedInfo: [],
    select: function(item) {
        this.set('selectedInfo', item);
    }});

