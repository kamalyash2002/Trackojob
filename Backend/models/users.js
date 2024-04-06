const mongoose  = require('mongoose');
const  {createHmac, randomBytes} = require('crypto');

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    salt : {
        type: String,
    },
    password: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

// mongoose middleware to hash the password
userSchema.pre('save', function(next){
    const user = this ;

    if(!user.isModified('password')) return next();
    // salt is the random string generated
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex');
    this.salt = salt;
    this.password = hashedPassword;
    next();
});


const User = mongoose.model('user', userSchema);

module.exports = {
    User
};