var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String
	},
	username: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	},
	facebook: {
		id: String
	},
	google: {
		id: String
	},
	github: {
		id: String
	}
});

mongoose.model('User', UserSchema);