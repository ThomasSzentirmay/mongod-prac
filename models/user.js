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
        minLength: [6, 'Password must be at least 6 chars in length']
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

            return is_valid;
        }
    },
    toJSON: {
        virtuals: true,
        transform: function (_, user) {
            delete user.password;
        }
    },
    virtuals: {
        favAmount: {
            get() {
                return this.favorites.length;
            }
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