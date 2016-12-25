'use strict';
// external
import mongoose from 'mongoose';

//locals



/* -------------- implementation -------------- */
var tagSchema = new mongoose.Schema({
	'value': {
		type: String,
		required: true,
		unique: true
	},
	'articles': {
		type: Array
	}
});



/* -------------- exports -------------- */
export default mongoose.model('tags', tagSchema);