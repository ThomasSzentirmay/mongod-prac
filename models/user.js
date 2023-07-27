const {Schema, model, Types} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    favorites: [
        {
            type: Types.ObjectId,
            ref: 'Planet'
        }
    ]
})

const User = model('User', userSchema);

module.exports = User;