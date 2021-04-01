import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title : {
        type : String
    },

    genere : {
        type : String
    },

    year : {
        type : Number
    }

})

const movie = mongoose.model('Movie', movieSchema);
export default movie;