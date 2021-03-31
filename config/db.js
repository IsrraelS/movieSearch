import mongoose from 'mongoose';

// Conection to DB

export const db = async () => {
     try { 
        await mongoose.connect('mongodb://127.0.0.1:27017/searchMovie',{ 
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false 
        } )
        console.log('MongoDB connected');
    } catch(e){
        console.log(e);
    }
}