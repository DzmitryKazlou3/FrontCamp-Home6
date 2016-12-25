'use strict';
// external
import mongoose from 'mongoose';

//locals
// import articleRoutes from './articleRoutes.js';

/* -------------- implementation -------------- */
var commentSchema = new mongoose.Schema({
    'article_id': {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    'text': {
        type: String,
        required: true,
    },
    'createDateTime': {
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
export default mongoose.model('comments', commentSchema);