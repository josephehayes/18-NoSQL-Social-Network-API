const { Schema, Types } = require('mongoose');
const thoughtSchema = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            // add Trim prop
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Validate email via mongoose matching
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
);

userSchema
    .virtual('friendCount')
    .get(() => {
        return `${this.friends.length}`;
    });

const User = model('user', userSchema);

module.exports = User;