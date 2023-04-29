import { Schema, Types } from 'mongoose';
import reactionSchema from './Reaction';

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
);

// thoughtSchema
//     .virtual('formatTime')
//     .get(() => {
//         return 
//     })
//     {

//     }
// )

const Thought = model('thought', thoughtSchema);

module.exports = Thought;