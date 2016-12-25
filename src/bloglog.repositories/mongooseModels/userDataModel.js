'use strict';
// external
import mongoose from 'mongoose';

//locals



/* -------------- implementation -------------- */
var userSchema = new mongoose.Schema({
	'name': {
		type: String,
		required: true,
		unique: true
	},
	'email': {
		type: String,
		required: true,
		unique: true
	},
	'password': {
		type: String,
		required: true
	}
});



/* -------------- exports -------------- */
export default mongoose.model('users', userSchema);