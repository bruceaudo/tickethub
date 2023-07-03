import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique:[true,'Email already exist!'],
        required:[true,'Email is required!']
    },
    fullname: {
        type: String,
        required:[true,'Full name is required!']
    },
    image: {
        type: String
    }
});


const User = models.User || model('User', UserSchema);

export default User