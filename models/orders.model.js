import mongoose from 'mongoose';

const ordersSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId
    },

    itemTitle : {
        type : mongoose.Types.ObjectId
    },

    orderTitle : {
        type : String
    },

    rentDate : {
        type : Date
    },

    returnDate : {
        type : Date
    }
})

const order = mongoose.model('Order', ordersSchema);
export default order;