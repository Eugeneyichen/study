const mongoose = require('mongoose');

	const YichenSchema = new mongoose.Schema({
		name: {
			type:String,
			default:"Mark",
			maxlength:[8,"max eight"],
			minlength:[3,"min three"]
		},
		age: {
			type:Number,
			required:[true,"have to enter a age"],
			min:[18,"min eighteen"],
			max:[40,"max forty"]
		},
		major: {
			type:String,
			enum:['music','art','sports','computer']
		},
	});

	const YichenModel = mongoose.model('yichen', YichenSchema);

	module.exports = YichenModel;