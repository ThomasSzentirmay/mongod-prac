const {Schema, model, Types} = require('mongoose');
const { hash, compare } = require('bcrypt');

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
}, {
    methods: {
        validatePass: async function(formPassword) {
            const is_valid = await compare(formPassword, this.password);
        }
    }
});

userSchema.pre('save', async function(next) {
    if (!this.created) {
        this.password = await hash(this.password, 10);
        next();
    }
});

const User = model('User', userSchema);

module.exports = User;