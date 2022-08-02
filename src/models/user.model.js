const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
    }
}, {
    collection: 'users',
    timestamps: true,
})
userSchema.virtual('getTime').get(() => {
    return Date.now();
})
userSchema.statics.getStatics = () => {
    return "GET STATICS";
}
userSchema.methods.getMethods = function () {
    return `GET METHODS with ${this.getTime}`;
}

userSchema.pre('save', function (next) {
    this.username = 'Username Default';
    next();
})
const User = model('User', userSchema);
module.exports = User;