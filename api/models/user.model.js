import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePicture: {
            type: String,
            default: "https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=740",
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },

    {timestamps:true}

);

const User = mongoose.model('User', userSchema);

export default User; 