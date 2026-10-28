const{defsult: mongoose} = require('mongoose');

const schema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password:{
            type: String,
            required: true,
            select: false
        }
    },
    {
        timestamps: true,
    }
);

const userModel = mongoose.model('Users', schema);
export default userModel