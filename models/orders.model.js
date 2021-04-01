import { ObjectID } from 'bson';
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    user : {
        type : ObjectID
    },

    itemTitle : {
        type : ObjectID
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