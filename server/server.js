Meteor.publish('endpoints', function() {
	var self = this;
	self.set('endpoints', Meteor.uuid(), {name: "los", params: "arg1 & arg2 @GeoJSON Point", return: "boolean"});
	self.complete();
	self.flush();
});