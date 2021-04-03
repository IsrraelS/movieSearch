import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type : String
    },

    lastname: {
        type : String
    }, 

    email: {
        type : String,
        require : [true, 'el email es requerido'],
        unique : true
    },

    dni : {
        type : String
    },

    checkIn : {
        type : String
    },

    password : {
        type : String,
        require : [true, 'el password es requerido'],
        unique : true
    }
})

const user = mongoose.model('User', userSchema);
export default user;