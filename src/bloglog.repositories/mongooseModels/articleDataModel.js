'use strict';
// external
import mongoose from 'mongoose';

//locals
// import articleRoutes from './articleRoutes.js';

/* -------------- implementation -------------- */
var articleSchema = new mongoose.Schema({
    'title': {
        type: String,
        required: true
    },
    'text': {
        type: String,
        required: true,
    },
    'tags': {
        type: String,
        default: []
    },
    'createDateTime': {
        type: Date,
        default: Date.now()
    },
    'updateDateTime': {
        type: Date,
        default: Date.now()
    },
    'user': {
        'user_id': {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        'name': {
            type: String,
            required: true
        }
    }
});



/* -------------- exports -------------- */
export default mongoose.model('articles', articleSchema);