Meteor.methods({
	los: function(losParam0, losParam1) {
//		if (!Meteor.match(losParam0, { loc: { type: String, coordinates: [Number] } })) {
// 			throw new Meteor.Error(400, "mongoDB geojson-point required");
// 		}
// 		if (!Meteor.match(losParam1, { loc: { type: String, coordinates: [Number] } })) {
// 			throw new Meteor.Error(400, "mongoDB geojson-point required");
// 		}

		//LoS computation
		lat1 = losParam0.loc.coordinates[0];
		lon1 = losParam0.loc.coordinates[1];

		lat2 = losParam1.loc.coordinates[0];
		lon2 = losParam1.loc.coordinates[1];

		lat1 = lat1.toRad();
		lon1 = lon1.toRad();
		lat2 = lat2.toRad();
		lon2 = lon2.toRad();

		R = 6371; // km
		d = Math.acos(Math.sin(lat1)*Math.sin(lat2) + Math.cos(lat1)*Math.cos(lat2) * Math.cos(lon2-lon1)) * R;//km
		d = d/1.60934;//miles
		if (d <= 1) {
			return {
				result: "los",
				distance: d
			};
		} else {
			return {
				result: "not in los",
				distance: d
			};
		}
	}
});